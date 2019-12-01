import React from "react";
import "./notfound.scss";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div class="notfound">
      <h1 class="notfound_title">Page not found</h1>
      <Link to="/" class="notfound_link">
        Return to Home Page
      </Link>
    </div>
  );
}

export default NotFound;
