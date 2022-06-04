import * as React from "react";
import {RepoLockedIcon} from '@primer/octicons-react'

function Header() {
  return (
    <div>
      <div className="fixed bg-white top-0 left-0 p-8 w-full z-50 border-b">
        <div className="font-black"><RepoLockedIcon/> CMU PGP</div>
      </div>
      <div className="pb-[150px]"></div>
    </div>
  );
}

export default Header;
