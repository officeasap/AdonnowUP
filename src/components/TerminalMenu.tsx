import React from "react";

export default function TerminalMenu() {
  return (
    <aside className="h-screen w-80 bg-canvas flex flex-col justify-between p-6">
      <nav className="flex flex-col gap-6">
        <MenuItem label="Home" />
        <MenuItem label="Dashboard" />

        {/* Search Block */}
        <div className="depth-raised p-4 flex items-center gap-3">
          <input
            type="text"
            placeholder="Search"
            className="search-input flex-1"
          />
          <button
            aria-label="Search"
            className="search-button"
          />
        </div>

        <MenuItem label="Sign Up" gold />
        <MenuItem label="Settings" />
        <MenuItem label="Profile" />
      </nav>
    </aside>
  );
}

function MenuItem({
  label,
  gold = false,
}: {
  label: string;
  gold?: boolean;
}) {
  return (
    <div className="depth-raised px-5 py-4">
      <span
        className={
          gold
            ? "menu-text text-gold text-raised-lg"
            : "menu-text text-primary text-raised"
        }
      >
        {label}
      </span>
    </div>
  );
}
