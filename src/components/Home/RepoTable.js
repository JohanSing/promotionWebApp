import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
})
const RepoTable = ({ repositories }) => {
  const classes = useStyles()
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align='center'>Owner</TableCell>
            <TableCell align='center'>Watchers</TableCell>
            <TableCell align='center'>Forks</TableCell>
            <TableCell align='center'>Url</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {repositories.map(repo => {
            return (
              <TableRow key={repo.id}>
                <TableCell component='th' scope='row'>
                  {repo.name}
                </TableCell>
                <TableCell align='center'>{repo.owner.login}</TableCell>
                <TableCell align='center'>{repo.watchers}</TableCell>
                <TableCell align='center'>{repo.forks}</TableCell>
                <TableCell align='center'>{repo.url}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

RepoTable.propTypes = {
  repositories: PropTypes.array
}

export default RepoTable
