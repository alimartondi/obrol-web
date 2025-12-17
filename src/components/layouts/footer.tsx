import React from "react";

export default function Footer() {
  return (
    <footer className="pb-12">
      <div className="container-wrapper flex justify-between">
        <div>
          <h1>Logo must be here</h1>
          <p className="font-medium text-sm">
            &copy; {new Date().getFullYear()} | All rights reserved
          </p>
        </div>
        <div className="text-sm font-medium">powered by Obrol</div>
      </div>
    </footer>
  );
}
