import LoginButton from "./LoginButton";

const LoginPage = () => {
  return (
    <div className="bg-blue-900">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
        className="flex-col"
      >
        <div className="p-2 h-50 bg-blue-500 shadow-md rounded-md flex">
          <div className="flex items-center flex-shrink-1 text-white mr-6 ml-6">
            <svg
              id="logo"
              width="448"
              height="191"
              viewBox="0 0 448 191"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.44 147.63C20.82 147.63 16.68 146.88 13.02 145.38C9.36 143.88 6.42 141.66 4.2 138.72C2.04 135.78 0.9 132.24 0.78 128.1H17.16C17.4 130.44 18.21 132.24 19.59 133.5C20.97 134.7 22.77 135.3 24.99 135.3C27.27 135.3 29.07 134.79 30.39 133.77C31.71 132.69 32.37 131.22 32.37 129.36C32.37 127.8 31.83 126.51 30.75 125.49C29.73 124.47 28.44 123.63 26.88 122.97C25.38 122.31 23.22 121.56 20.4 120.72C16.32 119.46 12.99 118.2 10.41 116.94C7.83 115.68 5.61 113.82 3.75 111.36C1.89 108.9 0.96 105.69 0.96 101.73C0.96 95.85 3.09 91.26 7.35 87.96C11.61 84.6 17.16 82.92 24 82.92C30.96 82.92 36.57 84.6 40.83 87.96C45.09 91.26 47.37 95.88 47.67 101.82H31.02C30.9 99.78 30.15 98.19 28.77 97.05C27.39 95.85 25.62 95.25 23.46 95.25C21.6 95.25 20.1 95.76 18.96 96.78C17.82 97.74 17.25 99.15 17.25 101.01C17.25 103.05 18.21 104.64 20.13 105.78C22.05 106.92 25.05 108.15 29.13 109.47C33.21 110.85 36.51 112.17 39.03 113.43C41.61 114.69 43.83 116.52 45.69 118.92C47.55 121.32 48.48 124.41 48.48 128.19C48.48 131.79 47.55 135.06 45.69 138C43.89 140.94 41.25 143.28 37.77 145.02C34.29 146.76 30.18 147.63 25.44 147.63ZM88.6411 147L73.3411 125.94V147H57.9511V80.4H73.3411V117.21L88.5511 96.78H107.541L86.6611 121.98L107.721 147H88.6411ZM164.886 96.78L133.386 170.85H116.826L128.346 145.29L107.916 96.78H125.106L136.716 128.19L148.236 96.78H164.886ZM246.043 147H230.653L204.913 108.03V147H189.523V83.82H204.913L230.653 122.97V83.82H246.043V147ZM280.059 147.72C275.139 147.72 270.699 146.67 266.739 144.57C262.839 142.47 259.749 139.47 257.469 135.57C255.249 131.67 254.139 127.11 254.139 121.89C254.139 116.73 255.279 112.2 257.559 108.3C259.839 104.34 262.959 101.31 266.919 99.21C270.879 97.11 275.319 96.06 280.239 96.06C285.159 96.06 289.599 97.11 293.559 99.21C297.519 101.31 300.639 104.34 302.919 108.3C305.199 112.2 306.339 116.73 306.339 121.89C306.339 127.05 305.169 131.61 302.829 135.57C300.549 139.47 297.399 142.47 293.379 144.57C289.419 146.67 284.979 147.72 280.059 147.72ZM280.059 134.4C282.999 134.4 285.489 133.32 287.529 131.16C289.629 129 290.679 125.91 290.679 121.89C290.679 117.87 289.659 114.78 287.619 112.62C285.639 110.46 283.179 109.38 280.239 109.38C277.239 109.38 274.749 110.46 272.769 112.62C270.789 114.72 269.799 117.81 269.799 121.89C269.799 125.91 270.759 129 272.679 131.16C274.659 133.32 277.119 134.4 280.059 134.4ZM342.494 133.95V147H334.664C329.084 147 324.734 145.65 321.614 142.95C318.494 140.19 316.934 135.72 316.934 129.54V109.56H310.814V96.78H316.934V84.54H332.324V96.78H342.404V109.56H332.324V129.72C332.324 131.22 332.684 132.3 333.404 132.96C334.124 133.62 335.324 133.95 337.004 133.95H342.494ZM398.406 121.08C398.406 122.52 398.316 124.02 398.136 125.58H363.306C363.546 128.7 364.536 131.1 366.276 132.78C368.076 134.4 370.266 135.21 372.846 135.21C376.686 135.21 379.356 133.59 380.856 130.35H397.236C396.396 133.65 394.866 136.62 392.646 139.26C390.486 141.9 387.756 143.97 384.456 145.47C381.156 146.97 377.466 147.72 373.386 147.72C368.466 147.72 364.086 146.67 360.246 144.57C356.406 142.47 353.406 139.47 351.246 135.57C349.086 131.67 348.006 127.11 348.006 121.89C348.006 116.67 349.056 112.11 351.156 108.21C353.316 104.31 356.316 101.31 360.156 99.21C363.996 97.11 368.406 96.06 373.386 96.06C378.246 96.06 382.566 97.08 386.346 99.12C390.126 101.16 393.066 104.07 395.166 107.85C397.326 111.63 398.406 116.04 398.406 121.08ZM382.656 117.03C382.656 114.39 381.756 112.29 379.956 110.73C378.156 109.17 375.906 108.39 373.206 108.39C370.626 108.39 368.436 109.14 366.636 110.64C364.896 112.14 363.816 114.27 363.396 117.03H382.656ZM426.955 147.72C422.575 147.72 418.675 146.97 415.255 145.47C411.835 143.97 409.135 141.93 407.155 139.35C405.175 136.71 404.065 133.77 403.825 130.53H419.035C419.215 132.27 420.025 133.68 421.465 134.76C422.905 135.84 424.675 136.38 426.775 136.38C428.695 136.38 430.165 136.02 431.185 135.3C432.265 134.52 432.805 133.53 432.805 132.33C432.805 130.89 432.055 129.84 430.555 129.18C429.055 128.46 426.625 127.68 423.265 126.84C419.665 126 416.665 125.13 414.265 124.23C411.865 123.27 409.795 121.8 408.055 119.82C406.315 117.78 405.445 115.05 405.445 111.63C405.445 108.75 406.225 106.14 407.785 103.8C409.405 101.4 411.745 99.51 414.805 98.13C417.925 96.75 421.615 96.06 425.875 96.06C432.175 96.06 437.125 97.62 440.725 100.74C444.385 103.86 446.485 108 447.025 113.16H432.805C432.565 111.42 431.785 110.04 430.465 109.02C429.205 108 427.525 107.49 425.425 107.49C423.625 107.49 422.245 107.85 421.285 108.57C420.325 109.23 419.845 110.16 419.845 111.36C419.845 112.8 420.595 113.88 422.095 114.6C423.655 115.32 426.055 116.04 429.295 116.76C433.015 117.72 436.045 118.68 438.385 119.64C440.725 120.54 442.765 122.04 444.505 124.14C446.305 126.18 447.235 128.94 447.295 132.42C447.295 135.36 446.455 138 444.775 140.34C443.155 142.62 440.785 144.42 437.665 145.74C434.605 147.06 431.035 147.72 426.955 147.72Z"
                fill="white"
              />
              <circle
                cx="51.1283"
                cy="49.7761"
                r="10"
                transform="rotate(-9.76196 51.1283 49.7761)"
                stroke="white"
              />
              <circle
                cx="210.889"
                cy="11.1283"
                r="10"
                transform="rotate(-9.76196 210.889 11.1283)"
                stroke="white"
              />
              <circle
                cx="173.128"
                cy="75.1283"
                r="10"
                transform="rotate(-9.76196 173.128 75.1283)"
                stroke="white"
              />
              <circle
                cx="144.509"
                cy="49.9453"
                r="10"
                transform="rotate(-9.76196 144.509 49.9453)"
                stroke="white"
              />
              <circle
                cx="96.9922"
                cy="80.4436"
                r="10"
                transform="rotate(-9.76196 96.9922 80.4436)"
                stroke="white"
              />
              <line
                x1="59.3495"
                y1="55.1225"
                x2="89.0424"
                y2="74.3666"
                stroke="white"
                strokeWidth={"5"}
              />
              <line
                x1="105.873"
                y1="76.0875"
                x2="136.837"
                y2="55.5398"
                stroke="white"
                strokeWidth={"5"}
              />
              <line
                x1="151.562"
                y1="56.0478"
                x2="166.562"
                y2="68.0478"
                stroke="white"
                strokeWidth={"5"}
              />
              <line
                x1="177.842"
                y1="66.7386"
                x2="205.737"
                y2="19.0068"
                stroke="white"
                strokeWidth={"5"}
              />
              <path
                d="M194.38 170.96V173.7H188.66V176.66H192.94V179.32H188.66V185H185.24V170.96H194.38ZM201.258 185.16C200.164 185.16 199.178 184.927 198.298 184.46C197.431 183.993 196.744 183.327 196.238 182.46C195.744 181.593 195.498 180.58 195.498 179.42C195.498 178.273 195.751 177.267 196.257 176.4C196.764 175.52 197.458 174.847 198.338 174.38C199.218 173.913 200.204 173.68 201.298 173.68C202.391 173.68 203.378 173.913 204.258 174.38C205.138 174.847 205.831 175.52 206.338 176.4C206.844 177.267 207.098 178.273 207.098 179.42C207.098 180.567 206.838 181.58 206.318 182.46C205.811 183.327 205.111 183.993 204.218 184.46C203.338 184.927 202.351 185.16 201.258 185.16ZM201.258 182.2C201.911 182.2 202.464 181.96 202.918 181.48C203.384 181 203.618 180.313 203.618 179.42C203.618 178.527 203.391 177.84 202.938 177.36C202.498 176.88 201.951 176.64 201.298 176.64C200.631 176.64 200.078 176.88 199.638 177.36C199.198 177.827 198.978 178.513 198.978 179.42C198.978 180.313 199.191 181 199.618 181.48C200.058 181.96 200.604 182.2 201.258 182.2ZM212.332 175.7C212.732 175.087 213.232 174.607 213.832 174.26C214.432 173.9 215.099 173.72 215.832 173.72V177.34H214.892C214.039 177.34 213.399 177.527 212.972 177.9C212.545 178.26 212.332 178.9 212.332 179.82V185H208.912V173.84H212.332V175.7ZM226.785 185.14C225.758 185.14 224.838 184.973 224.025 184.64C223.212 184.307 222.558 183.813 222.065 183.16C221.585 182.507 221.332 181.72 221.305 180.8H224.945C224.998 181.32 225.178 181.72 225.485 182C225.792 182.267 226.192 182.4 226.685 182.4C227.192 182.4 227.592 182.287 227.885 182.06C228.178 181.82 228.325 181.493 228.325 181.08C228.325 180.733 228.205 180.447 227.965 180.22C227.738 179.993 227.452 179.807 227.105 179.66C226.772 179.513 226.292 179.347 225.665 179.16C224.758 178.88 224.018 178.6 223.445 178.32C222.872 178.04 222.378 177.627 221.965 177.08C221.552 176.533 221.345 175.82 221.345 174.94C221.345 173.633 221.818 172.613 222.765 171.88C223.712 171.133 224.945 170.76 226.465 170.76C228.012 170.76 229.258 171.133 230.205 171.88C231.152 172.613 231.658 173.64 231.725 174.96H228.025C227.998 174.507 227.832 174.153 227.525 173.9C227.218 173.633 226.825 173.5 226.345 173.5C225.932 173.5 225.598 173.613 225.345 173.84C225.092 174.053 224.965 174.367 224.965 174.78C224.965 175.233 225.178 175.587 225.605 175.84C226.032 176.093 226.698 176.367 227.605 176.66C228.512 176.967 229.245 177.26 229.805 177.54C230.378 177.82 230.872 178.227 231.285 178.76C231.698 179.293 231.905 179.98 231.905 180.82C231.905 181.62 231.698 182.347 231.285 183C230.885 183.653 230.298 184.173 229.525 184.56C228.752 184.947 227.838 185.14 226.785 185.14ZM240.23 182.1V185H238.49C237.25 185 236.283 184.7 235.59 184.1C234.896 183.487 234.55 182.493 234.55 181.12V176.68H233.19V173.84H234.55V171.12H237.97V173.84H240.21V176.68H237.97V181.16C237.97 181.493 238.05 181.733 238.21 181.88C238.37 182.027 238.636 182.1 239.01 182.1H240.23ZM253.155 173.84V185H249.735V183.48C249.388 183.973 248.915 184.373 248.315 184.68C247.728 184.973 247.075 185.12 246.355 185.12C245.501 185.12 244.748 184.933 244.095 184.56C243.441 184.173 242.935 183.62 242.575 182.9C242.215 182.18 242.035 181.333 242.035 180.36V173.84H245.435V179.9C245.435 180.647 245.628 181.227 246.015 181.64C246.401 182.053 246.921 182.26 247.575 182.26C248.241 182.26 248.768 182.053 249.155 181.64C249.541 181.227 249.735 180.647 249.735 179.9V173.84H253.155ZM254.931 179.4C254.931 178.253 255.144 177.247 255.571 176.38C256.011 175.513 256.604 174.847 257.351 174.38C258.098 173.913 258.931 173.68 259.851 173.68C260.584 173.68 261.251 173.833 261.851 174.14C262.464 174.447 262.944 174.86 263.291 175.38V170.2H266.711V185H263.291V183.4C262.971 183.933 262.511 184.36 261.911 184.68C261.324 185 260.638 185.16 259.851 185.16C258.931 185.16 258.098 184.927 257.351 184.46C256.604 183.98 256.011 183.307 255.571 182.44C255.144 181.56 254.931 180.547 254.931 179.4ZM263.291 179.42C263.291 178.567 263.051 177.893 262.571 177.4C262.104 176.907 261.531 176.66 260.851 176.66C260.171 176.66 259.591 176.907 259.111 177.4C258.644 177.88 258.411 178.547 258.411 179.4C258.411 180.253 258.644 180.933 259.111 181.44C259.591 181.933 260.171 182.18 260.851 182.18C261.531 182.18 262.104 181.933 262.571 181.44C263.051 180.947 263.291 180.273 263.291 179.42ZM279.705 179.24C279.705 179.56 279.685 179.893 279.645 180.24H271.905C271.959 180.933 272.179 181.467 272.565 181.84C272.965 182.2 273.452 182.38 274.025 182.38C274.879 182.38 275.472 182.02 275.805 181.3H279.445C279.259 182.033 278.919 182.693 278.425 183.28C277.945 183.867 277.339 184.327 276.605 184.66C275.872 184.993 275.052 185.16 274.145 185.16C273.052 185.16 272.079 184.927 271.225 184.46C270.372 183.993 269.705 183.327 269.225 182.46C268.745 181.593 268.505 180.58 268.505 179.42C268.505 178.26 268.739 177.247 269.205 176.38C269.685 175.513 270.352 174.847 271.205 174.38C272.059 173.913 273.039 173.68 274.145 173.68C275.225 173.68 276.185 173.907 277.025 174.36C277.865 174.813 278.519 175.46 278.985 176.3C279.465 177.14 279.705 178.12 279.705 179.24ZM276.205 178.34C276.205 177.753 276.005 177.287 275.605 176.94C275.205 176.593 274.705 176.42 274.105 176.42C273.532 176.42 273.045 176.587 272.645 176.92C272.259 177.253 272.019 177.727 271.925 178.34H276.205ZM288.31 173.72C289.616 173.72 290.656 174.147 291.43 175C292.216 175.84 292.61 177 292.61 178.48V185H289.21V178.94C289.21 178.193 289.016 177.613 288.63 177.2C288.243 176.787 287.723 176.58 287.07 176.58C286.416 176.58 285.896 176.787 285.51 177.2C285.123 177.613 284.93 178.193 284.93 178.94V185H281.51V173.84H284.93V175.32C285.276 174.827 285.743 174.44 286.33 174.16C286.916 173.867 287.576 173.72 288.31 173.72ZM301.206 182.1V185H299.466C298.226 185 297.259 184.7 296.566 184.1C295.873 183.487 295.526 182.493 295.526 181.12V176.68H294.166V173.84H295.526V171.12H298.946V173.84H301.186V176.68H298.946V181.16C298.946 181.493 299.026 181.733 299.186 181.88C299.346 182.027 299.613 182.1 299.986 182.1H301.206ZM307.651 185.16C306.678 185.16 305.811 184.993 305.051 184.66C304.291 184.327 303.691 183.873 303.251 183.3C302.811 182.713 302.564 182.06 302.511 181.34H305.891C305.931 181.727 306.111 182.04 306.431 182.28C306.751 182.52 307.144 182.64 307.611 182.64C308.038 182.64 308.364 182.56 308.591 182.4C308.831 182.227 308.951 182.007 308.951 181.74C308.951 181.42 308.784 181.187 308.451 181.04C308.118 180.88 307.578 180.707 306.831 180.52C306.031 180.333 305.364 180.14 304.831 179.94C304.298 179.727 303.838 179.4 303.451 178.96C303.064 178.507 302.871 177.9 302.871 177.14C302.871 176.5 303.044 175.92 303.391 175.4C303.751 174.867 304.271 174.447 304.951 174.14C305.644 173.833 306.464 173.68 307.411 173.68C308.811 173.68 309.911 174.027 310.711 174.72C311.524 175.413 311.991 176.333 312.111 177.48H308.951C308.898 177.093 308.724 176.787 308.431 176.56C308.151 176.333 307.778 176.22 307.311 176.22C306.911 176.22 306.604 176.3 306.391 176.46C306.178 176.607 306.071 176.813 306.071 177.08C306.071 177.4 306.238 177.64 306.571 177.8C306.918 177.96 307.451 178.12 308.171 178.28C308.998 178.493 309.671 178.707 310.191 178.92C310.711 179.12 311.164 179.453 311.551 179.92C311.951 180.373 312.158 180.987 312.171 181.76C312.171 182.413 311.984 183 311.611 183.52C311.251 184.027 310.724 184.427 310.031 184.72C309.351 185.013 308.558 185.16 307.651 185.16ZM321.922 175.42C322.242 174.9 322.702 174.48 323.302 174.16C323.902 173.84 324.588 173.68 325.362 173.68C326.282 173.68 327.115 173.913 327.862 174.38C328.608 174.847 329.195 175.513 329.622 176.38C330.062 177.247 330.282 178.253 330.282 179.4C330.282 180.547 330.062 181.56 329.622 182.44C329.195 183.307 328.608 183.98 327.862 184.46C327.115 184.927 326.282 185.16 325.362 185.16C324.575 185.16 323.888 185.007 323.302 184.7C322.715 184.38 322.255 183.96 321.922 183.44V185H318.502V170.2H321.922V175.42ZM326.802 179.4C326.802 178.547 326.562 177.88 326.082 177.4C325.615 176.907 325.035 176.66 324.342 176.66C323.662 176.66 323.082 176.907 322.602 177.4C322.135 177.893 321.902 178.567 321.902 179.42C321.902 180.273 322.135 180.947 322.602 181.44C323.082 181.933 323.662 182.18 324.342 182.18C325.022 182.18 325.602 181.933 326.082 181.44C326.562 180.933 326.802 180.253 326.802 179.4ZM343.476 173.84L336.476 190.3H332.796L335.356 184.62L330.816 173.84H334.636L337.216 180.82L339.776 173.84H343.476ZM354.031 185.14C353.004 185.14 352.084 184.973 351.271 184.64C350.458 184.307 349.804 183.813 349.311 183.16C348.831 182.507 348.578 181.72 348.551 180.8H352.191C352.244 181.32 352.424 181.72 352.731 182C353.038 182.267 353.438 182.4 353.931 182.4C354.438 182.4 354.838 182.287 355.131 182.06C355.424 181.82 355.571 181.493 355.571 181.08C355.571 180.733 355.451 180.447 355.211 180.22C354.984 179.993 354.698 179.807 354.351 179.66C354.018 179.513 353.538 179.347 352.911 179.16C352.004 178.88 351.264 178.6 350.691 178.32C350.118 178.04 349.624 177.627 349.211 177.08C348.798 176.533 348.591 175.82 348.591 174.94C348.591 173.633 349.064 172.613 350.011 171.88C350.958 171.133 352.191 170.76 353.711 170.76C355.258 170.76 356.504 171.133 357.451 171.88C358.398 172.613 358.904 173.64 358.971 174.96H355.271C355.244 174.507 355.078 174.153 354.771 173.9C354.464 173.633 354.071 173.5 353.591 173.5C353.178 173.5 352.844 173.613 352.591 173.84C352.338 174.053 352.211 174.367 352.211 174.78C352.211 175.233 352.424 175.587 352.851 175.84C353.278 176.093 353.944 176.367 354.851 176.66C355.758 176.967 356.491 177.26 357.051 177.54C357.624 177.82 358.118 178.227 358.531 178.76C358.944 179.293 359.151 179.98 359.151 180.82C359.151 181.62 358.944 182.347 358.531 183C358.131 183.653 357.544 184.173 356.771 184.56C355.998 184.947 355.084 185.14 354.031 185.14ZM367.476 182.1V185H365.736C364.496 185 363.529 184.7 362.836 184.1C362.142 183.487 361.796 182.493 361.796 181.12V176.68H360.436V173.84H361.796V171.12H365.216V173.84H367.456V176.68H365.216V181.16C365.216 181.493 365.296 181.733 365.456 181.88C365.616 182.027 365.882 182.1 366.256 182.1H367.476ZM380.401 173.84V185H376.981V183.48C376.634 183.973 376.161 184.373 375.561 184.68C374.974 184.973 374.321 185.12 373.601 185.12C372.747 185.12 371.994 184.933 371.341 184.56C370.687 184.173 370.181 183.62 369.821 182.9C369.461 182.18 369.281 181.333 369.281 180.36V173.84H372.681V179.9C372.681 180.647 372.874 181.227 373.261 181.64C373.647 182.053 374.167 182.26 374.821 182.26C375.487 182.26 376.014 182.053 376.401 181.64C376.787 181.227 376.981 180.647 376.981 179.9V173.84H380.401ZM382.177 179.4C382.177 178.253 382.391 177.247 382.817 176.38C383.257 175.513 383.851 174.847 384.597 174.38C385.344 173.913 386.177 173.68 387.097 173.68C387.831 173.68 388.497 173.833 389.097 174.14C389.711 174.447 390.191 174.86 390.537 175.38V170.2H393.957V185H390.537V183.4C390.217 183.933 389.757 184.36 389.157 184.68C388.571 185 387.884 185.16 387.097 185.16C386.177 185.16 385.344 184.927 384.597 184.46C383.851 183.98 383.257 183.307 382.817 182.44C382.391 181.56 382.177 180.547 382.177 179.4ZM390.537 179.42C390.537 178.567 390.297 177.893 389.817 177.4C389.351 176.907 388.777 176.66 388.097 176.66C387.417 176.66 386.837 176.907 386.357 177.4C385.891 177.88 385.657 178.547 385.657 179.4C385.657 180.253 385.891 180.933 386.357 181.44C386.837 181.933 387.417 182.18 388.097 182.18C388.777 182.18 389.351 181.933 389.817 181.44C390.297 180.947 390.537 180.273 390.537 179.42ZM406.951 179.24C406.951 179.56 406.931 179.893 406.891 180.24H399.151C399.205 180.933 399.425 181.467 399.811 181.84C400.211 182.2 400.698 182.38 401.271 182.38C402.125 182.38 402.718 182.02 403.051 181.3H406.691C406.505 182.033 406.165 182.693 405.671 183.28C405.191 183.867 404.585 184.327 403.851 184.66C403.118 184.993 402.298 185.16 401.391 185.16C400.298 185.16 399.325 184.927 398.471 184.46C397.618 183.993 396.951 183.327 396.471 182.46C395.991 181.593 395.751 180.58 395.751 179.42C395.751 178.26 395.985 177.247 396.451 176.38C396.931 175.513 397.598 174.847 398.451 174.38C399.305 173.913 400.285 173.68 401.391 173.68C402.471 173.68 403.431 173.907 404.271 174.36C405.111 174.813 405.765 175.46 406.231 176.3C406.711 177.14 406.951 178.12 406.951 179.24ZM403.451 178.34C403.451 177.753 403.251 177.287 402.851 176.94C402.451 176.593 401.951 176.42 401.351 176.42C400.778 176.42 400.291 176.587 399.891 176.92C399.505 177.253 399.265 177.727 399.171 178.34H403.451ZM415.556 173.72C416.862 173.72 417.902 174.147 418.676 175C419.462 175.84 419.856 177 419.856 178.48V185H416.456V178.94C416.456 178.193 416.262 177.613 415.876 177.2C415.489 176.787 414.969 176.58 414.316 176.58C413.662 176.58 413.142 176.787 412.756 177.2C412.369 177.613 412.176 178.193 412.176 178.94V185H408.756V173.84H412.176V175.32C412.522 174.827 412.989 174.44 413.576 174.16C414.162 173.867 414.822 173.72 415.556 173.72ZM428.452 182.1V185H426.712C425.472 185 424.506 184.7 423.812 184.1C423.119 183.487 422.772 182.493 422.772 181.12V176.68H421.412V173.84H422.772V171.12H426.192V173.84H428.432V176.68H426.192V181.16C426.192 181.493 426.272 181.733 426.432 181.88C426.592 182.027 426.859 182.1 427.232 182.1H428.452ZM434.897 185.16C433.924 185.16 433.057 184.993 432.297 184.66C431.537 184.327 430.937 183.873 430.497 183.3C430.057 182.713 429.811 182.06 429.757 181.34H433.137C433.177 181.727 433.357 182.04 433.677 182.28C433.997 182.52 434.391 182.64 434.857 182.64C435.284 182.64 435.611 182.56 435.837 182.4C436.077 182.227 436.197 182.007 436.197 181.74C436.197 181.42 436.031 181.187 435.697 181.04C435.364 180.88 434.824 180.707 434.077 180.52C433.277 180.333 432.611 180.14 432.077 179.94C431.544 179.727 431.084 179.4 430.697 178.96C430.311 178.507 430.117 177.9 430.117 177.14C430.117 176.5 430.291 175.92 430.637 175.4C430.997 174.867 431.517 174.447 432.197 174.14C432.891 173.833 433.711 173.68 434.657 173.68C436.057 173.68 437.157 174.027 437.957 174.72C438.771 175.413 439.237 176.333 439.357 177.48H436.197C436.144 177.093 435.971 176.787 435.677 176.56C435.397 176.333 435.024 176.22 434.557 176.22C434.157 176.22 433.851 176.3 433.637 176.46C433.424 176.607 433.317 176.813 433.317 177.08C433.317 177.4 433.484 177.64 433.817 177.8C434.164 177.96 434.697 178.12 435.417 178.28C436.244 178.493 436.917 178.707 437.437 178.92C437.957 179.12 438.411 179.453 438.797 179.92C439.197 180.373 439.404 180.987 439.417 181.76C439.417 182.413 439.231 183 438.857 183.52C438.497 184.027 437.971 184.427 437.277 184.72C436.597 185.013 435.804 185.16 434.897 185.16ZM443.11 185.16C442.51 185.16 442.016 184.987 441.63 184.64C441.256 184.28 441.07 183.84 441.07 183.32C441.07 182.787 441.256 182.34 441.63 181.98C442.016 181.62 442.51 181.44 443.11 181.44C443.696 181.44 444.176 181.62 444.55 181.98C444.936 182.34 445.13 182.787 445.13 183.32C445.13 183.84 444.936 184.28 444.55 184.64C444.176 184.987 443.696 185.16 443.11 185.16Z"
                fill="white"
              />
            </svg>

            {/* <span className="font-semibold text-7xl tracking-normal">
              Sky Core
            </span> */}
          </div>
        </div>
        <div className="m-2">
          <LoginButton></LoginButton>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
