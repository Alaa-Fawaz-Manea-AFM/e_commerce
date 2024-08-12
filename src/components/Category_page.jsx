import { Link } from "react-router-dom";

const Category_page = () => {
  const pathname = location.pathname.replace(/%20/g, " ").slice(1);

  const pathnames = /-/gi.test(pathname)
    ? pathname.match(/\w+-\w+/gi)
    : pathname.split("/");

  return (
    <nav className="ml-10">
      <ul className="flex flex-wrap items-center gap-3">
        {pathnames?.length > 0 ? (
          <>
            <li>
              <Link to="/" className="opacity-50">
                Home
              </Link>
            </li>
            {pathname == "check-out" ? (
              <div className="opacity-50 flex gap-2">
                <span>/</span>
                <li>
                  <Link to="/account">My Account</Link>
                </li>
                <span>/</span>
                <li>
                  <Link to="/">Product</Link>
                </li>
                <span>/</span>
                <li>
                  <Link to="/">View Cart</Link>
                </li>
              </div>
            ) : (
              ""
            )}

            {pathnames.map((value, i) => {
              const isLast = i === pathnames.length - 1;
              return (
                <li key={value}>
                  {isLast ? (
                    <>
                      <span className="opacity-50">/</span>
                      <span className="capitalize ml-2">{value}</span>
                    </>
                  ) : (
                    <div className="opacity-50">
                      <span>/</span>
                      <Link to={value} className="capitalize ml-2">
                        {value}
                      </Link>
                    </div>
                  )}
                </li>
              );
            })}
          </>
        ) : (
          <li>
            <Link to="/">Account</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Category_page;
