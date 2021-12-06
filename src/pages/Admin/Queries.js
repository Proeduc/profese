import React from 'react'
import './Admin.css'

function Queries() {
    return (
        <>
          <div className="queries container-fluid">
              <h2>Recentle posted Queries</h2>
              <div className="queries__table conainer">
                  <table className="table table-striped table-responsive">
                      <thead>
                          <tr>
                              <th>ID</th>
                              <th>Email</th>
                              <th>Queries</th>
                              <th>Date</th>
                          </tr>
                      </thead>

                      <tbody>
                          <tr>
                              <td>01</td>
                              <td>riti@gmail.com</td>
                              <td>How to use assignment help?</td>
                              <td>01-12-21</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
        </>
    )
}

export default Queries
