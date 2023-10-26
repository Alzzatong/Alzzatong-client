import Example from "@/components/Company/Check";
import SidebarNav from "@/components/SidebarNav";
import '@/styles/globals.css';

export default function Company({}) {
  return (
    <div className="appContainer">
      <div className="sidebarContent">
      <SidebarNav />
      </div>
      <div className="pageContent">
        <Example></Example>
        {/* <Component {...pageProps} /> */}
      </div>
    </div>
  );
}
