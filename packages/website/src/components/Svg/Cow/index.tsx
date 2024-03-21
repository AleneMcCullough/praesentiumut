import type { FC } from 'react';

export interface CowProps {
  className?: string;
}

export const Cow: FC<CowProps> = ({ className }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="1000px"
    height="1000px"
    viewBox="0 0 1000 1000"
    enableBackground="new 0 0 1000 1000"
    className={className}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        // eslint:disable-next-line
        d="M884,329.64c-1.122,5.369-2.196,10.749-3.374,16.105 c-5.812,26.44-14.017,52.028-27.338,75.751c-8.967,15.969-19.913,30.313-34.847,41.242c-17.124,12.532-36.314,17.801-57.453,16.278 c-15.802-1.139-30.767-5.478-45.043-12.084c-5.87-2.717-11.806-3.102-17.942-2.617c-3.539,0.28-7.031,1.141-10.631,1.754 c0.009,0.118-0.085-0.121-0.007-0.265c10.652-19.542,8.98-38.777-1.587-57.698c-1.23-2.204-1.374-3.731-0.087-5.998 c4.313-7.596,6.408-15.77,5.273-24.585c-0.039-0.302-0.005-0.613-0.005-0.933c12.388-4.38,22.498-12.23,30.922-21.735 c21.579-24.352,48.968-38.988,79.189-49.157c13.771-4.634,27.94-7.222,42.558-6.92c9.435,0.195,18.555,1.809,27.24,5.592 c6.401,2.788,10.529,7.59,12.593,14.226c0.106,0.344,0.355,0.644,0.538,0.965C884,322.92,884,326.28,884,329.64z M813.712,411.235 c13.214-11.448,24.157-24.656,31.979-40.3c4.986-9.976,8.731-20.378,9.758-31.577c0.747-8.158-3.785-15.235-11.115-17.18 c-3.213-0.852-6.578-1.426-9.895-1.544c-12.256-0.437-23.887,2.734-35.259,6.86c-25.36,9.203-48.545,22.578-70.963,37.389 c-0.212,0.14-0.518,0.137-0.779,0.201c0.172,0.167,0.344,0.334,0.516,0.501c6.907-3.452,13.771-6.995,20.731-10.338 c17.256-8.287,34.713-16.104,53.276-21.07c8.582-2.296,17.264-4.059,26.248-2.629c7.499,1.193,12.295,5.485,13.14,13.042 c0.468,4.186,0.021,8.641-0.887,12.783c-2.658,12.12-8.274,23.077-14.427,33.733C822.103,397.917,817.831,404.532,813.712,411.235z M116.48,320.52c0.283-0.723,0.615-1.431,0.841-2.172c1.925-6.315,5.841-10.919,11.843-13.68 c10.928-5.028,22.511-6.349,34.371-5.811c22.41,1.016,43.156,8.08,63.146,17.713c13.792,6.646,26.886,14.458,38.425,24.604 c3.887,3.418,7.336,7.338,10.943,11.07c7.019,7.262,14.383,14.125,23.115,19.307c3.339,1.982,6.924,3.551,10.595,5.408 c-1.522,9.651,1.301,18.615,6.165,27.146c0.339,0.594,0.078,1.818-0.324,2.504c-4.226,7.232-7.299,14.867-8.674,23.173 c-2.099,12.683-0.024,24.606,6.26,35.809c0.116,0.207,0.203,0.43,0.246,0.521c-3.407-0.581-6.848-1.36-10.333-1.719 c-6.48-0.667-12.69-0.128-18.843,2.743c-13.077,6.103-26.845,10.176-41.255,11.635c-27.48,2.782-51.181-5.511-71.055-24.695 c-16.231-15.667-27.08-34.831-35.658-55.405c-9.213-22.099-15.302-45.104-19.335-68.676c-0.077-0.452-0.312-0.878-0.474-1.316 C116.48,325.96,116.48,323.24,116.48,320.52z M272.693,365.663c0.082-0.15,0.163-0.301,0.245-0.452 c-2.861-1.863-5.702-3.759-8.589-5.583c-20.825-13.152-42.271-25.105-65.679-33.097c-11.907-4.065-24.03-7.013-36.839-5.579 c-11.376,1.273-17.435,7.567-16.425,18.974c0.575,6.498,2.402,13.023,4.573,19.218c7.084,20.224,19.782,36.685,35.429,51.033 c0.284,0.261,0.689,0.39,1.654,0.917c-0.957-1.467-1.555-2.3-2.068-3.183c-5.619-9.649-11.527-19.146-16.747-29.006 c-4.939-9.332-8.863-19.184-9.322-29.932c-0.343-8.028,2.437-14.054,10.39-16.621c2.32-0.749,4.836-1.119,7.281-1.219 c10.545-0.43,20.566,2.308,30.458,5.508c21.311,6.895,41.392,16.63,61.287,26.777C269.795,364.16,271.243,364.915,272.693,365.663z M663.008,669.929c-0.57-6.571-0.819-13.115-1.764-19.557c-1.846-12.592-6.015-24.323-14.439-34.166 c-8.361-9.77-19.219-14.847-31.82-16.344c-11.665-1.386-23.322-0.167-34.94,0.729c-11.3,0.872-22.556,2.314-33.824,3.57 c-8.967,1-17.9,2.408-26.892,3.038c-5.608,0.394-11.294-0.401-16.948-0.509c-2.742-0.052-5.514,0.076-8.234,0.424 c-8.098,1.036-16.116,0.118-24.14-0.764c-18.413-2.021-36.807-4.222-55.24-6.034c-7.539-0.741-15.158-0.889-22.743-0.921 c-23.11-0.101-40.845,12.222-49.031,33.803c-3.836,10.115-5.649,20.597-5.755,31.392c-0.017,1.744-0.002,3.489-0.002,5.548 c-4.864-1.54-8.998-3.864-12.838-6.717c-9.7-7.205-14.901-17.091-16.823-28.821c-2.638-16.104,0.222-31.7,5.145-46.927 c2.886-8.929,6.822-17.515,10.166-26.3c0.529-1.39,0.774-3.069,0.563-4.53c-4.173-28.935-0.409-56.709,12.433-83.037 c13.871-28.438,34.403-50.76,62.111-66.282c12.372-6.932,25.758-10.52,39.782-12.147c20.579-2.388,40.963-1.236,61.273,2.623 c2.06,0.391,4.374-0.458,6.554-0.828c16.933-2.874,33.938-3.865,51.081-2.336c14.256,1.271,28.075,4.083,40.99,10.548 c18.312,9.166,33.66,22.004,46.606,37.747c15.749,19.153,26.357,40.818,31.112,65.23c3.099,15.908,3.408,31.886,0.85,47.902 c-0.32,2.008-0.121,3.79,0.807,5.725c7.428,15.472,12.966,31.583,15.206,48.656c1.541,11.742,1.423,23.426-3.074,34.694 c-4.804,12.035-13.703,19.76-25.494,24.496C663.406,669.946,663.072,669.921,663.008,669.929z M605.628,421.397 c0.963,4.05,2.046,7.475,2.561,10.983c1.789,12.183-2.256,21.521-15.65,24.141c-4.38,0.856-8.461,2.359-11.879,5.298 c-8.065,6.935-10.746,16.04-9.978,26.251c0.537,7.135,3.031,13.625,8.943,18.149c7.012,5.365,14.798,4.856,22.577,2.128 c19.232-6.746,29.46-26.586,24.763-47.405c-2.858-12.667-9.106-23.591-16.774-33.836 C608.833,425.295,607.366,423.566,605.628,421.397z M394.049,421.417c-6.855,8.215-12.873,16.908-17.128,26.736 c-3.265,7.541-5.247,15.325-5.182,23.644c0.136,17.333,10.931,32.072,27.48,37.161c10.059,3.093,18.936,0.843,24.504-6.399 c3.563-4.635,5.015-10.017,5.354-15.833c0.734-12.635-5.88-27.413-22.268-30.356c-11.702-2.102-17.405-10.878-15.455-22.681 C392.024,429.63,393.109,425.64,394.049,421.417z M385.188,614.35c-30.602,9.913-44.266,43.738-29.744,70.788 c13.506,25.16,32.758,44.557,58.68,56.919c16.505,7.872,33.85,10.102,51.838,6.574c11.664-2.287,22.316-7.104,32.274-13.49 c1.28-0.82,2.135-0.883,3.381-0.029c1.975,1.351,4.068,2.535,6.165,3.692c20.894,11.528,42.822,14.716,65.889,7.9 c14.798-4.372,27.73-12.192,39.306-22.259c13.833-12.029,25.468-25.849,33.104-42.676c8.517-18.77,3.709-41.744-11.356-55.673 c-12.316-11.388-27.147-15.468-43.479-14.71c-12.123,0.562-24.212,1.836-36.332,2.469c-15.026,0.785-30.035,0.18-45.006-1.363 c-3.883-0.4-7.802-1.142-11.661-0.929c-9.802,0.541-19.571,2.066-29.368,2.215c-13.484,0.203-26.987-0.346-40.471-0.874 c-7.413-0.29-14.802-1.199-19.317-1.584C399.026,611.195,392.012,612.139,385.188,614.35z M614.046,304.22 c-4.441-7.552-10.675-12.843-19.206-15.215c-5.954-1.655-12.028-1.494-18.089-0.922c-6.198,0.584-12.37,1.462-18.569,2.041 c-8.708,0.813-16.924-1.104-24.966-4.422c-5.063-2.089-10.335-3.744-15.624-5.186c-2.317-0.632-4.934-0.479-7.377-0.265 c-3.544,0.31-5.785,2.279-6.321,6.167c-0.924,6.702-1.378,13.469-2.005,20.211c-0.079,0.852-0.011,1.717-0.011,3.075 c-2.08-3.633-3.823-6.902-5.774-10.042c-4.486-7.22-10.406-12.706-18.816-15.042c-6.247-1.735-12.613-1.932-19.017-1.34 c-10.881,1.004-21.744,2.226-32.638,3.057c-6.35,0.484-12.85-0.287-19.098,0.692c-12.795,2.004-22.984,8.451-29.298,20.121 c-4.257,7.869-1.296,17.128,6.733,21.185c2.62,1.324,5.428,2.295,8.193,3.309c9.971,3.655,15.402,10.976,17.087,21.237 c0.75,4.566,3.28,7.726,7.163,9.913c6.563,3.695,13.806,4.717,21.17,5.343c2.07,0.176,4.465,0.445,6.056,1.585 c4.102,2.939,3.749,9.51-0.764,11.916c-2.781,1.482-6.159,2.074-9.346,2.527c-23.123,3.288-43.874,12.207-62.387,26.303 c-17.72,13.492-31.283,30.301-39.339,51.223c-1.911,4.962-3.122,10.194-4.659,15.3c-0.151,0.5-0.333,0.992-0.671,1.987 c-14.79-25.739-11.593-50.302,2.654-74.574c-7.669-6.593-10.705-15.2-10.515-25.115c0.199-10.346,5.33-17.771,13.816-23.23 c0.802-0.516,1.736-1.586,1.767-2.43c0.872-24.068,13.771-39.763,34.372-50.502c8.469-4.415,16.503-9.679,24.643-14.708 c8.296-5.126,16.499-10.51,26.149-12.688c6.912-1.56,13.954-2.592,20.975-3.604c9.8-1.413,18.569-4.963,26.196-11.385 c4.704-3.961,9.538-7.889,15.574-9.669c8.622-2.543,16.993-1.01,24.948,2.575c6.902,3.111,13.532,6.823,20.328,10.176 c10.314,5.09,21.436,7.675,32.565,10.14c10.117,2.241,20.345,3.996,30.433,6.356C603.153,283.308,610.116,292.33,614.046,304.22z M341.396,397.209c6.927,1.933,15.42-3.808,18.002-10.533c3.484-9.078-0.717-19.207-9.632-22.887 c-8.248-3.404-18.796,0.382-21.805,7.826c9.91-5.26,18.346-3.502,22.554,4.615C353.767,382.505,352.773,392.788,341.396,397.209z M333.249,382.019c2.373,0.034,4.197-1.644,4.25-3.911c0.056-2.4-1.807-4.32-4.182-4.311c-2.231,0.009-4.102,1.875-4.136,4.127 C329.145,380.24,330.878,381.985,333.249,382.019z M605.976,285.565c6.292,2.87,12.091,5.283,17.679,8.112 c12.737,6.448,24.342,14.432,33.104,25.961c7.495,9.863,11.641,20.86,10.715,33.422c-0.134,1.817,0.703,2.704,1.981,3.673 c8.49,6.434,13.247,14.796,12.889,25.667c-0.26,7.891-2.972,14.8-8.544,20.498c-0.494,0.505-0.962,1.036-1.38,1.487 c14.257,24.308,17.445,48.856,2.726,74.484c-1.533-5.072-2.716-9.767-4.365-14.293c-6.201-17.022-16.648-31.178-29.779-43.48 c-11.345-10.627-24.26-19.025-37.901-26.304c-8.729-4.657-18.408-6.692-27.949-8.955c-6.36-1.508-12.817-2.604-19.194-4.045 c-1.91-0.431-3.869-1.135-5.508-2.181c-5.003-3.195-5.851-7.113-2.87-12.218c3.534-6.053,8.322-10.506,15.719-10.576 c3.701-0.035,7.417,0.868,11.117,1.409c2.602,0.38,5.173,1.09,7.783,1.254c5.353,0.336,7.924-1.375,10.057-6.313 c1.296-3.001,2.515-6.035,3.785-9.047c2.637-6.249,7.107-10.496,13.625-12.553c1.821-0.575,3.605-1.282,5.378-2 c10.631-4.306,14.215-14.344,8.737-24.482c-3.886-7.191-9.742-12.597-16.043-17.592c-0.374-0.296-0.767-0.569-1.135-0.874 C606.496,286.533,606.45,286.376,605.976,285.565z M641.396,371.752c9.896-5.434,18.505-3.728,22.723,4.503 c4.164,8.126,0.637,16.222-9.132,20.958c5.196,1.796,14.711-2.42,17.915-10.289c3.563-8.745-0.271-18.921-8.859-22.804 C655.484,360.251,645.177,363.724,641.396,371.752z M646.895,382.019c2.46,0.021,4.282-1.746,4.246-4.115 c-0.034-2.191-1.926-4.08-4.114-4.106c-2.364-0.029-4.233,1.838-4.214,4.207C642.831,380.308,644.551,381.999,646.895,382.019z"
      />
    </g>
  </svg>
);