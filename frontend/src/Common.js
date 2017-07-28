import React from 'react'
import FontAwesome from 'react-fontawesome'
import 'font-awesome/css/font-awesome.css'
import { Link } from 'react-router-dom'
import queryString from 'query-string'

import {
  toDate,
  isBefore,
  formatDistance,
  formatDistanceStrict
} from 'date-fns/esm'

export const Loading = () =>
<p className="has-text-centered">
  <span className="icon is-large">
    <FontAwesome name="cog" spin size="5x" />
    <span className="sr-only">Loading...</span>
  </span>
</p>


export const DisplayDate = ({ date }) => {
  if (date === null) {
    throw new Error('date is null')
  }
  const dateObj = toDate(date)
  const now = new Date()
  if (isBefore(dateObj, now)) {
    return (
      <span title={date}>
        {formatDistance(date, now)} ago
      </span>
    )
  } else {
    return (
      <span title={date}>
        in {formatDistance(date, now)}
      </span>
    )
  }
}

export const DisplayDateDifference = ({ from, to, suffix = '' }) => {
  const fromObj = toDate(from)
  const toObj = toDate(to)
  return (
    <span title={`From ${fromObj} to ${toObj}`}>
      {formatDistanceStrict(fromObj, toObj)}
      {suffix && ` ${suffix}`}
    </span>
  )
}

export const formatFileSize = (bytes, decimals = 0) => {
  if (!bytes) return '0 bytes'
  var k = 1024
  var dm = decimals + 1 || 3
  var sizes = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  var i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

export const BooleanIcon = bool =>
  <span className="icon" style={{ color: bool ? 'green' : 'red' }}>
    <i className={bool ? 'fa fa-thumbs-o-up' : 'fa fa-thumbs-o-down'} />
  </span>

export const Pagination = ({
  location,
  total,
  batchSize,
  currentPage,
  updateFilter
}) => {
  if (!currentPage) {
    currentPage = 1
  } else if (typeof currentPage === 'string') {
    currentPage = parseInt(currentPage, 10)
  }

  const nextPageUrl = page => {
    const qs = queryString.parse(location.search)
    qs.page = page
    return location.pathname + '?' + queryString.stringify(qs)
  }

  const goTo = (event, page) => {
    event.preventDefault()
    updateFilter({ page })
  }

  const isOverflow = page => {
    // return true if doesn't make sense to go to this page
    return page < 1 || (page - 1) * batchSize > total
  }

  return (
    <nav className="pagination is-right">
      <Link
        className="pagination-previous"
        to={nextPageUrl(currentPage - 1)}
        onClick={e => goTo(e, currentPage - 1)}
        disabled={isOverflow(currentPage - 1)}
      >
        Previous
      </Link>
      <Link
        to={nextPageUrl(currentPage + 1)}
        className="pagination-next"
        onClick={e => goTo(e, currentPage + 1)}
        disabled={isOverflow(currentPage + 1)}
      >
        Next page
      </Link>
      {/* <ul className="pagination-list">
        <li>
          <Link to={nextPageUrl(1)} className="pagination-link"
             onClick={e => goTo(e, 1)}>
            1
          </Link>
        </li>
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <a className="pagination-link">45</a>
        </li>
        <li>
          <a className="pagination-link is-current">46</a>
        </li>
        <li>
          <a className="pagination-link">47</a>
        </li>
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <a className="pagination-link">86</a>
        </li>
      </ul> */}
    </nav>
  )
}

export const TableSubTitle = ({ total, page, batchSize }) => {
  if (total === null) {
    return null
  }
  page = page || 1
  const totalPages = Math.ceil(total / batchSize)
  return (
    <h2 className="subtitle">
      {total} Found (Page {page} of {totalPages})
    </h2>
  )
}