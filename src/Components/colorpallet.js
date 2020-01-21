import React, { Component } from "react";
import "../jarvisguide.css";

export default class colorpallet extends Component {
  render() {
    return (
      <div class="palletContainer">
        <h1>colorpallet</h1>
        <h3>Primary Color</h3>
        <div class="Aligner">
          <div>
            <div class="page-header" />
            <h2>Primary Page</h2>
            <h3>Color code:#142755</h3>
          </div>
          <div>
            <div class=" page-subheader" />
            <h2>Page subheader</h2>
            <h3>Color code:#0066cc</h3>
          </div>
          <div>
            <div class=" page-disableheader" />
            <h2>Page disableheader</h2>
            <h3>Color code:#3d4558</h3>
          </div>
          <div>
            {" "}
            <div class="page-secondary" />
            <h2>Page Secondary</h2>
            <h3>Color code:#999999</h3>
          </div>
          <div>
            <div class=" page-success" />
            <h2>Page Success</h2>
            <h3>Color code:#aaf455</h3>
          </div>
          <div>
            {" "}
            <div class=" page-info" />
            <h2>Page Info</h2>
            <h3>Color code:#00b7ff</h3>
          </div>
          <div>
            {" "}
            <div class="page-danger" />
            <h2>Page Danger</h2>
            <h3>Color code:#ce392b</h3>
          </div>
          <div>
            <div class=" page-warning" />
            <h2>Page Warning</h2>
            <h3>Color code:#f69f2a</h3>
          </div>
          <div>
            {" "}
            <div class=" page-alert" />
            <h2>Page Alert</h2>
            <h3>Color code:#7ac558</h3>
          </div>
        </div>
      </div>
    );
  }
}
