import "./ThemeSwitch.css";
import { useSwitchButton } from "../../context/SwitchButtonContext";

const SparkleToggle = ({ changeTheme }) => {
  const { checked, setChecked } = useSwitchButton();

  const handleToggle = () => {
    setChecked(!checked);
    changeTheme();
  };

  const sparkles = [
    { width: 2, deg: 25, duration: 11 },
    { width: 1, deg: 100, duration: 18 },
    { width: 1, deg: 280, duration: 5 },
    { width: 2, deg: 200, duration: 3 },
    { width: 2, deg: 30, duration: 20 },
    { width: 2, deg: 300, duration: 9 },
    { width: 1, deg: 250, duration: 4 },
    { width: 2, deg: 210, duration: 8 },
    { width: 2, deg: 100, duration: 9 },
    { width: 1, deg: 15, duration: 13 },
    { width: 1, deg: 75, duration: 18 },
    { width: 2, deg: 65, duration: 6 },
    { width: 2, deg: 50, duration: 7 },
    { width: 1, deg: 320, duration: 5 },
    { width: 1, deg: 220, duration: 5 },
    { width: 1, deg: 215, duration: 2 },
    { width: 2, deg: 135, duration: 9 },
    { width: 2, deg: 45, duration: 4 },
    { width: 1, deg: 78, duration: 16 },
    { width: 1, deg: 89, duration: 19 },
    { width: 2, deg: 65, duration: 14 },
    { width: 2, deg: 97, duration: 1 },
    { width: 1, deg: 174, duration: 10 },
    { width: 1, deg: 236, duration: 5 },
  ];

  return (
    <div className="toggle-cont">
      <input
        className="toggle-input"
        id="toggle"
        name="toggle"
        type="checkbox"
        checked={checked}
        onChange={handleToggle}
      />
      <label className="toggle-label" htmlFor="toggle">
        <div className="cont-icon">
          {sparkles.map((s, idx) => (
            <span
              key={idx}
              className="sparkle"
              style={{
                "--width": s.width,
                "--deg": s.deg,
                "--duration": s.duration,
              }}
            />
          ))}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={checked ? "#F9D784" : "#A7A7A7"}
            color="currentColor"
            viewBox="0 0 30 30"
            className="icon"
          >
            <path d="M0.96233 28.61C1.36043 29.0081 1.96007 29.1255 2.47555 28.8971L10.4256 25.3552C13.2236 24.11 16.4254 24.1425 19.2107 25.4401L27.4152 29.2747C27.476 29.3044 27.5418 29.3023 27.6047 29.32C27.6563 29.3348 27.7079 29.3497 27.761 29.3574C27.843 29.3687 27.9194 29.3758 28 29.3688C28.1273 29.3617 28.2531 29.3405 28.3726 29.2945C28.4447 29.262 28.5162 29.2287 28.5749 29.1842C28.6399 29.1446 28.6993 29.0994 28.7509 29.0477L28.9008 28.8582C28.9468 28.7995 28.9793 28.7274 29.0112 28.656C29.0599 28.5322 29.0811 28.4036 29.0882 28.2734C29.0939 28.1957 29.0868 28.1207 29.0769 28.0415C29.0705 27.9955 29.0585 27.9524 29.0472 27.9072C29.0295 27.8343 29.0302 27.7601 28.9984 27.6901L25.1638 19.4855C23.8592 16.7073 23.8273 13.5048 25.0726 10.7068L28.6145 2.75679C28.8429 2.24131 28.7318 1.63531 28.3337 1.2372C27.9165 0.820011 27.271 0.721743 26.7491 0.9961L19.8357 4.59596C16.8418 6.15442 13.2879 6.18696 10.2615 4.70062L1.80308 0.520214C1.7055 0.474959 1.60722 0.441742 1.50964 0.421943C1.44459 0.409215 1.37882 0.395769 1.3074 0.402133C1.14406 0.395769 0.981436 0.428275 0.818095 0.499692C0.77284 0.519491 0.719805 0.545671 0.67455 0.578198C0.596061 0.617088 0.524653 0.675786 0.4596 0.74084C0.394546 0.805894 0.335843 0.877306 0.296245 0.956502C0.263718 1.00176 0.237561 1.05477 0.217762 1.10003C0.152708 1.24286 0.126545 1.40058 0.120181 1.54978C0.120181 1.61483 0.126527 1.6735 0.132891 1.73219C0.15269 1.85664 0.178881 1.97332 0.237571 2.08434L4.41798 10.5427C5.91139 13.5621 5.8725 17.1238 4.3204 20.1099L0.720514 27.0233C0.440499 27.5536 0.545137 28.1928 0.96233 28.61Z" />
          </svg>
        </div>
      </label>
    </div>
  );
};

export default SparkleToggle;
