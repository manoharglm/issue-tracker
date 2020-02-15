import React from 'react';
import '../App.css';
import {
  TextField,
  MenuItem,
  AppBar,
  Toolbar,
  Typography, Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';
import { connect } from 'react-redux';
import { getTableData, updateStatus } from '../actions'
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
const statusColors = {
  "Done": "#d2f5b0",
  "Not started": "#fcbdbd",
  "In progress": "#c2dfff"
}


class IssueTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogId: 0,
      editHeader: false,
      headerText: "ISSUE TRACKER"
    };
    this.dialogBoxData = ["Done", "Not started", "In progress"]
  }

  componentDidMount() {
    this.props.getTableData()
  }


  handleHeaderButton = () => {
    this.setState(prevState => {
      return {
        editHeader: !prevState.editHeader
      }
    })
  }

  updateHeader = e => {
    this.setState({
      headerText: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            {
              this.state.editHeader
                ? <TextField onChange={this.updateHeader} id="standard-basic" value={this.state.headerText} />
                : <Typography variant="h6">{this.state.headerText}</Typography>
            }
            {
              this.state.editHeader
                ? <DoneIcon onClick={this.handleHeaderButton} className={"title-button"} />
                : <EditIcon onClick={this.handleHeaderButton} className={"title-button"} />
            }
          </Toolbar>
        </AppBar>
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow style={{ backgroundColor: 'white' }}>
                <TableCell align="left">ID</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align="left">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.rows?.map(row => (
                <TableRow style={{ backgroundColor: statusColors[row.status] }} key={row.id}>
                  <TableCell align="left">{row.id}</TableCell>
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell className={"table-status"} align="left">
                    <TextField
                      id="standard-select-currency"
                      select
                      value={row.status}
                      name={row.id}
                      onChange={this.props.updateStatus}
                    >
                      {this.dialogBoxData.map(status => (
                        <MenuItem key={status} value={status}>
                          {status}
                        </MenuItem>
                      ))}
                    </TextField>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    rows: state.rows,
  })
}

const mapDispatchToProps = dispatch => ({
  getTableData: () => dispatch(getTableData()),
  updateStatus: (e) => dispatch(updateStatus(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(IssueTracker);