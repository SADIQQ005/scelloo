
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-[#E5E5E5] h-screen px-8 py-5">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
