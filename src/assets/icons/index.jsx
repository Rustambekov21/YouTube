import * as React from "react"

export const Icons = {
    home: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={19}
          fill="none"
          {...props}
        >
          <path
            fill="#000"
            fillRule="evenodd"
            d="M1.552 10.592a.912.912 0 0 1-1.286 0 .902.902 0 0 1 0-1.28L9.357.266a.912.912 0 0 1 1.286 0l9.09 9.048a.902.902 0 0 1 0 1.28.912.912 0 0 1-1.285 0l-.266-.266v6.868A1.81 1.81 0 0 1 16.362 19H3.638a1.812 1.812 0 0 1-1.819-1.805v-6.868l-.266.265Zm2.085 6.598 2.727.001V11.76c0-.499.406-.903.906-.903h5.46c.5 0 .906.404.906.903v5.433l2.728.002V8.519L10 2.192 3.636 8.519l.001 8.671Zm8.181-4.525v4.527H8.182v-4.525l3.636-.002Z"
            clipRule="evenodd"
            opacity={0.24}
          />
        </svg>
      ),
      trend: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={21}
          fill="none"
          {...props}
        >
          <path
            fill="#000"
            fillRule="evenodd"
            d="M13.615 7.2C15.132 8.51 16 10.117 16 12.321c0 4.59-3.587 8.206-7.989 8.206C3.606 20.527 0 16.909 0 12.32c0-2.527.548-4.089 2.155-6.684.509-.822 1.744-.523 1.84.445.085.87.35 1.61.734 2.177C4.472 5.193 5.804 1.744 9.086.106c.76-.38 1.608.319 1.41 1.16-.512 2.183.016 3.356 1.396 4.621.034.031.206.158.433.326.412.304 1.006.742 1.29.987ZM2.621 9.007C2.339 9.663 2 10.453 2 12.321c0 3.447 2.701 6.157 6.011 6.157 3.305 0 5.989-2.705 5.989-6.157 0-1.54-.575-2.605-1.674-3.554-.174-.15-.58-.452-.963-.737-.362-.27-.702-.522-.804-.616C9.234 6.2 8.424 4.907 8.314 3.184c-.67.668-2.21 2.748-1.342 6.864.134.639-.34 1.241-.977 1.241-1.265 0-2.515-.99-3.279-2.507-.03.074-.062.149-.095.225Z"
            clipRule="evenodd"
            opacity={0.24}
          />
        </svg>
      ),
      subs: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          height={18}
          fill="none"
          {...props}
        >
          <path
            fill="#000"
            fillRule="evenodd"
            d="M3.906 1A1 1 0 0 1 4.9 0h8.01a1 1 0 0 1 0 2H4.9a.995.995 0 0 1-.995-1ZM.01 8.095l.801 8.01A2.123 2.123 0 0 0 2.901 18H14.91A2.129 2.129 0 0 0 17 16.104l.801-8.01A1.885 1.885 0 0 0 15.905 6H1.906C.76 6-.104 6.956.01 8.095Zm2.001-.09 13.789.003L14.906 16h-12L2.01 8.004ZM2.901 3a1 1 0 0 0 0 2H14.91a1 1 0 0 0 0-2H2.901Z"
            clipRule="evenodd"
            opacity={0.24}
          />
        </svg>
      ),
      library: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={16}
          fill="none"
          {...props}
        >
          <path
            fill="#000"
            fillRule="evenodd"
            d="M1.814 0C.818 0 0 .794 0 1.773v12.454C0 15.207.814 16 1.819 16h16.362C19.185 16 20 15.204 20 14.223V4.444c0-.983-.816-1.777-1.822-1.777h-8.175L8.716.743C8.44.333 7.81 0 7.308 0H1.814ZM18.18 14.222l-16.363.005-.004-12.45 5.459.005 1.21 1.858a1.83 1.83 0 0 0 1.52.804h8.179l-.001 9.778Z"
            clipRule="evenodd"
            opacity={0.24}
          />
        </svg>
      ),
      history: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={18}
          fill="none"
          {...props}
        >
          <path
            fill="#000"
            fillRule="evenodd"
            d="M6.364 0C4.857 0 3.636 1.207 3.636 2.697V12.6H.91a.905.905 0 0 0-.909.9v1.8C0 16.791 1.224 18 2.727 18h10.91c1.505 0 2.727-1.206 2.727-2.695V5.4h2.727c.505 0 .909-.402.909-.898V2.704C20 1.211 18.78 0 17.273 0H6.363ZM5.3 16.2c.1-.28.155-.583.155-.897V2.697c0-.495.406-.897.909-.897.5 0 .909.404.909.9v1.8c0 .497.403.9.909.9h6.364v9.905a.902.902 0 0 1-.91.895H5.3Zm-3.482-1.8v.9c0 .496.409.9.91.9.502 0 .908-.402.908-.897V14.4H1.818ZM9.091 3.6v-.9c0-.316-.055-.619-.156-.9h8.338c.502 0 .909.404.909.904V3.6H9.09Z"
            clipRule="evenodd"
            opacity={0.24}
          />
        </svg>
      ),
      watch: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={17}
          height={19}
          fill="none"
          {...props}
        >
          <path
            fill="#000"
            fillRule="evenodd"
            d="M12.726 16.734A7.809 7.809 0 0 1 8.5 17.973c-1.552 0-3-.454-4.226-1.239l-.908 1.616A.983.983 0 0 1 2 18.725a1.04 1.04 0 0 1-.367-1.402s1.05-1.86 1.077-1.897A8.307 8.307 0 0 1 .5 9.756c0-1.223.26-2.384.728-3.427A3.627 3.627 0 0 1 0 3.595C0 1.609 1.567 0 3.5 0c1.293 0 2.423.72 3.029 1.792a7.816 7.816 0 0 1 3.76-.045C10.901.7 12.017 0 13.292 0c1.933 0 3.5 1.61 3.5 3.595a3.631 3.631 0 0 1-1.082 2.598 8.368 8.368 0 0 1 .79 3.564c0 2.198-.84 4.195-2.21 5.67.027.036 1.077 1.896 1.077 1.896A1.04 1.04 0 0 1 15 18.725a.983.983 0 0 1-1.366-.375l-.908-1.616ZM7.5 5.648c0-.567.444-1.026 1-1.026.552 0 1 .455 1 1.026v4.109a1.01 1.01 0 0 1-1 1.027h-2c-.553 0-1-.456-1-1.027a1.01 1.01 0 0 1 1-1.027h1V5.648ZM2 3.595c0-.851.672-1.541 1.5-1.541.44 0 .843.196 1.12.516a8.091 8.091 0 0 0-2.303 1.972A1.566 1.566 0 0 1 2 3.595Zm12.792 0c0-.851-.671-1.541-1.5-1.541a1.48 1.48 0 0 0-1.05.44 8.076 8.076 0 0 1 2.327 1.91 1.57 1.57 0 0 0 .223-.81ZM8.5 15.919c-3.314 0-6-2.759-6-6.162 0-3.404 2.686-6.162 6-6.162s6 2.758 6 6.162c0 3.403-2.686 6.162-6 6.162Z"
            clipRule="evenodd"
            opacity={0.24}
          />
        </svg>
      ),
      burger: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={17}
          fill="none"
          {...props}
        >
          <path
            fill="#1F2022"
            fillRule="evenodd"
            d="M18.636 3H1.364C.61 3 0 2.328 0 1.5S.61 0 1.364 0h17.272C19.39 0 20 .672 20 1.5S19.39 3 18.636 3ZM1.364 7h17.272C19.39 7 20 7.672 20 8.5s-.61 1.5-1.364 1.5H1.364C.61 10 0 9.328 0 8.5S.61 7 1.364 7Zm17.272 7H1.364C.61 14 0 14.672 0 15.5S.61 17 1.364 17h17.272C19.39 17 20 16.328 20 15.5s-.61-1.5-1.364-1.5Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      logo: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={116}
          height={25}
          fill="none"
          {...props}
        >
          <path fill="#fff" d="M7.941 3.999h21v17h-21z" />
          <path
            fill="red"
            fillRule="evenodd"
            d="m11.615 24.822 7.517.136c.012 0 .036 0 .036.017 4.186.077 8.265-.165 12.439-.466 3.33-.23 4.12-2.612 4.533-5.454.514-3.431.628-6.904.359-10.36a166.79 166.79 0 0 1-.038-.493c-.25-3.306-.532-7.023-4.495-7.708-.844-.147-1.705-.277-2.56-.3-8.097-.26-16.266-.325-24.381.23C2.62.576 1.065 1.98.67 4.331a50.658 50.658 0 0 0-.459 12.88c.266 2.974.575 6.45 4.143 7.168 1.92.394 3.876.41 5.835.425.475.004.95.008 1.425.017Zm7.056-9.3-3.958 2.242V7.163c1.43.808 2.849 1.613 4.27 2.419 1.688.957 3.378 1.915 5.089 2.881a7174.704 7174.704 0 0 0-5.401 3.059Z"
            clipRule="evenodd"
          />
          <path
            fill="#000"
            fillRule="evenodd"
            d="M96.724 22.747c.084-.316.17-.642.265-1.02l.18.253c.066.092.118.166.172.236 1.561 2.022 4.707 1.668 5.67-.667.293-.707.526-1.48.562-2.234.09-2.47.126-4.935.078-7.406-.024-.96-.222-1.946-.527-2.865-.472-1.48-1.806-2.158-3.367-1.858-.98.2-1.74.72-2.326 1.516a4.004 4.004 0 0 1-.119.144c-.057.067-.129.151-.228.274V.866h-3.432v22.376h2.942l.13-.495Zm.432-3.084v-8.184c0-.69.335-1.209.885-1.575.73-.477 1.471-.235 1.74.584.144.454.258.938.258 1.404a392.174 392.174 0 0 1-.144 7.505c-.006.266-.12.531-.233.785-.27.607-.808.86-1.471.707-.676-.153-1.035-.56-1.035-1.226ZM87.827 7.505h3.594v15.748h-2.805c-.092-.54-.184-1.094-.29-1.73l-.033-.198c-.124.18-.216.318-.297.441v.001l-.127.19c-.933 1.326-2.255 1.78-3.816 1.538-1.333-.212-2.135-1.226-2.314-2.889a13.855 13.855 0 0 1-.078-1.492c-.008-2.457-.005-4.92-.002-7.38V11.725l.002-3.678v-.554h3.636v.643l-.001 2.67c-.002 2.67-.005 5.337.013 8.008 0 .507.054 1.032.144 1.539.102.518.484.707.998.672.832-.065 1.406-.672 1.406-1.486V8.2c-.03-.23-.03-.442-.03-.695Zm-21.134-.012H63.08l-.006.424c0 3.827 0 7.671.012 11.498 0 .478.048.95.113 1.427.24 1.527 1.023 2.459 2.303 2.647 1.597.242 2.906-.253 3.839-1.603a25.6 25.6 0 0 1 .383-.578l.166.969v.002l.169.974h2.792V7.516h-3.594v11.988c-.006.82-.502 1.38-1.321 1.491-.592.077-.94-.112-1.077-.696a7.277 7.277 0 0 1-.155-1.527c-.018-2.648-.016-5.3-.014-7.955l.002-2.658v-.666ZM61.227 15.9c-.01.424-.035.849-.06 1.273l-.018.319-.035.425c-.123 1.547-.28 3.525-1.472 4.587-.831.73-1.884.996-2.972 1.032a9.286 9.286 0 0 1-1.46-.054c-2.29-.341-3.354-1.338-3.737-3.82-.437-2.866-.472-5.779.048-8.644.538-2.966 2.392-4.016 5.274-3.82 2.692.188 3.894 1.927 4.21 4.404.174 1.42.258 2.86.222 4.298Zm-3.656-1.407c-.002.288-.004.577-.004.864 0 .934-.037 1.868-.073 2.8-.017.428-.033.854-.047 1.28 0 .343-.12.69-.257 1.009-.173.413-.484.643-.957.643-.484 0-.855-.236-.998-.667-.373-1.11-.333-2.306-.293-3.484.01-.317.021-.632.024-.944.011-1.58.023-3.166.023-4.746 0-.217.064-.439.127-.656l.011-.04c.191-.62.562-.937 1.088-.95.539-.011.97.307 1.113.974.125.577.203 1.167.227 1.75.026.721.02 1.445.016 2.167Zm-11.118-3.336c.227-1.101.45-2.19.69-3.282.192-.884.394-1.769.596-2.654.233-1.02.466-2.042.684-3.065.102-.466.293-.578.742-.566.684.025 1.378.02 2.092.015.29-.001.583-.003.88-.003-.307 1.115-.61 2.18-.907 3.228l-.08.28a2797.533 2797.533 0 0 0-3.056 10.743 3.265 3.265 0 0 0-.113.872 480.814 480.814 0 0 0-.003 3.91c.001.652.003 1.304.003 1.957v.637h-3.51l-.015-.177c-.011-.118-.022-.236-.022-.354 0-.354-.009-.708-.018-1.063-.02-.755-.039-1.51.03-2.256.225-2.301-.394-4.44-1.012-6.578-.09-.311-.18-.622-.267-.934-.455-1.622-.912-3.246-1.37-4.87a4083.27 4083.27 0 0 1-1.37-4.87 2.518 2.518 0 0 1-.062-.271 4.287 4.287 0 0 0-.051-.237h3.582C44.65 5.2 45.41 8.778 46.2 12.393l.254-1.235Zm62.377 5.344h6.052c0-.73.006-1.441.012-2.142.008-.82.015-1.628.011-2.44a9.824 9.824 0 0 0-.293-1.957c-.34-1.368-1.124-2.411-2.595-2.665a10.711 10.711 0 0 0-2.781-.1c-1.692.165-2.787 1.15-3.289 2.754-.125.389-.239.772-.305 1.173-.371 2.406-.305 4.829-.125 7.229.065.973.37 1.945.693 2.877.347.997 1.119 1.645 2.153 1.946 1.399.407 2.805.407 4.174-.124 1.741-.666 2.775-2.824 2.201-4.505a173.9 173.9 0 0 1-2.102-.105h-.002l-.904-.048-.006.103c-.015.28-.026.5-.048.705-.024.26-.06.513-.113.766-.168.779-.587 1.132-1.304 1.12-.688-.005-1.124-.341-1.214-1.126-.091-.814-.129-1.634-.167-2.479-.015-.324-.03-.65-.048-.982Zm2.613-2.07.001-.886c.003-.862.005-1.696-.013-2.533 0-.265-.102-.543-.203-.796-.204-.495-.628-.631-1.137-.631-.508 0-.831.254-.956.708-.313 1.112-.287 2.245-.26 3.384.006.255.012.51.014.766.915-.011 1.747-.011 2.554-.011Zm-39.374-9.94h3.558l.006 18.738h3.523V4.474h3.534V1.65H72.069v2.842Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      search: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={19}
          height={19}
          fill="none"
          {...props}
        >
          <path
            fill="#000"
            fillRule="evenodd"
            d="m17.9 16.486-3.58-3.58a8 8 0 1 0-1.415 1.413l3.58 3.58a1 1 0 1 0 1.416-1.413ZM13.198 11A6 6 0 1 1 2.804 5a6 6 0 0 1 10.393 6Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      liveChatIcon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={27}
          height={20}
          fill="none"
          {...props}
        >
          <path
            fill="#000"
            fillRule="evenodd"
            d="M22.208 2.868 18.41 5.682v-3.18C18.41 1.119 17.31 0 15.955 0h-13.5C1.095 0 0 1.12 0 2.503v14.994C0 18.882 1.099 20 2.454 20h13.501c1.358 0 2.454-1.12 2.454-2.503v-3.179l3.8 2.814a2.19 2.19 0 0 0 1.111.368h2.45c.686 0 1.23-.561 1.23-1.253V3.753c0-.692-.551-1.253-1.23-1.253h-2.45a2.16 2.16 0 0 0-1.112.368ZM2.455 17.5v-15h13.5v15h-13.5Zm2.454-3.75c0-.69.55-1.25 1.231-1.25h6.13c.679 0 1.23.555 1.23 1.25 0 .69-.55 1.25-1.23 1.25H6.14c-.68 0-1.23-.555-1.23-1.25ZM23.511 15l-5.087-3.762V8.762l5.083-3.765 1.038.001v10L23.512 15Z"
            clipRule="evenodd"
            opacity={0.24}
          />
        </svg>
      ),
      headerMenuIcon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={21}
          height={21}
          fill="none"
          {...props}
        >
          <path
            fill="#000"
            fillRule="evenodd"
            d="M0 2.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0ZM2.5 13a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0 8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm8 0a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm5.5-2.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0ZM10.5 13a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM8 2.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0ZM18.5 13a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM16 2.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z"
            clipRule="evenodd"
            opacity={0.24}
          />
        </svg>
      ),
      natification: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={22}
          height={26}
          fill="none"
          {...props}
        >
          <path
            fill="#000"
            fillRule="evenodd"
            d="M3.67 22.454C1.643 22.454 0 20.866 0 18.91c0-1.298.727-2.456 1.838-3.074l-.005-4.61c0-4.083 2.836-7.521 6.723-8.548v-.313C8.556 1.058 9.65 0 11 0c1.35 0 2.444 1.058 2.444 2.364v.313c3.888 1.026 6.723 4.465 6.723 8.555v4.613C21.279 16.466 22 17.62 22 18.91c0 1.96-1.641 3.546-3.67 3.546h-3.663C14.665 24.412 13.02 26 11 26c-2.025 0-3.667-1.586-3.667-3.543l-3.664-.003Zm6.108 0c0 .654.546 1.182 1.222 1.182.67 0 1.22-.53 1.222-1.181H9.778Zm7.944-11.222v5.71c0 .328.27.661.596.743l.32.08c.535.133.918.604.918 1.144 0 .653-.547 1.182-1.225 1.182H3.669c-.675 0-1.225-.531-1.225-1.182 0-.542.381-1.011.916-1.144l.332-.083a.803.803 0 0 0 .586-.74v-5.716c0-3.59 3.009-6.499 6.722-6.499 3.715 0 6.722 2.908 6.722 6.505Z"
            clipRule="evenodd"
            opacity={0.24}
          />
        </svg>
      ),
      nextBtn: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={66}
          height={28}
          fill="none"
          {...props}
        >
          <path
            fill="#000"
            d="M52 28c7.732 0 14-6.268 14-14S59.732 0 52 0 38 6.268 38 14s6.268 14 14 14Z"
            opacity={0.24}
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            d="m49.998 8.666-.534.54a.925.925 0 0 0-.264.653c0 .254.088.47.264.647L52.928 14l-3.464 3.494a.885.885 0 0 0-.264.647c0 .249.088.467.264.654l.534.532c.18.182.397.273.65.273.256 0 .47-.091.64-.273l4.641-4.68A.858.858 0 0 0 56.2 14a.896.896 0 0 0-.27-.654l-4.641-4.68a.87.87 0 0 0-.642-.266.91.91 0 0 0-.649.266Z"
            clipRule="evenodd"
          />
          <path
            fill="#000"
            d="M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14Z"
            opacity={0.24}
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            d="m16.002 8.666.534.54a.925.925 0 0 1 .264.653c0 .254-.088.47-.264.647L13.072 14l3.464 3.494a.885.885 0 0 1 .264.647c0 .249-.088.467-.264.654l-.534.532a.881.881 0 0 1-.65.273.844.844 0 0 1-.64-.273l-4.641-4.68A.858.858 0 0 1 9.8 14c0-.254.09-.472.27-.654l4.64-4.68a.87.87 0 0 1 .642-.266.91.91 0 0 1 .649.266Z"
            clipRule="evenodd"
          />
        </svg>
      ), 
      favoutitesPage: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={19}
          height={18}
          fill="none"
          {...props}
        >
          <path
            fill="#000"
            fillRule="evenodd"
            d="M15.588 16.178c.217 1.256-.876 2.046-2.009 1.453 0 0-4.253-2.203-4.211-2.225l-4.25 2.225c-1.134.594-2.225-.198-2.01-1.453 0 0 .791-4.71.824-4.677L.494 8.163c-.917-.89-.499-2.169.767-2.352 0 0 4.742-.707 4.721-.665L8.107.857c.567-1.143 1.917-1.142 2.483 0 0 0 2.14 4.273 2.094 4.266l4.752.688c1.267.183 1.683 1.462.767 2.352 0 0-3.419 3.347-3.426 3.301l.811 4.714Zm-10.492-.62 3.41-1.786c.498-.262 1.188-.261 1.686 0l3.417 1.789-.66-3.785a1.895 1.895 0 0 1 .522-1.597l2.753-2.673-3.806-.556a1.907 1.907 0 0 1-1.365-.987L9.35 2.526 7.644 5.963c-.25.503-.808.907-1.364.987l-3.811.552 2.757 2.677c.404.392.617 1.045.522 1.597l-.652 3.781Z"
            clipRule="evenodd"
            opacity={0.24}
          />
        </svg>
      ),
      liked: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          height={17}
          fill="none"
          {...props}
        >
          <path
            fill="#000"
            fillRule="evenodd"
            d="M12.6 0C11.217 0 9.955.53 9 1.404A5.318 5.318 0 0 0 5.4 0C2.418 0 0 2.468 0 5.514c0 4.444 4.48 8.74 8.62 11.245.21.133.553.131.762-.001C13.495 14.243 18 9.958 18 5.514 18 2.468 15.582 0 12.6 0ZM9.005 14.825C4.555 11.855 1.8 8.385 1.8 5.514c0-2.03 1.612-3.676 3.6-3.676.9 0 1.743.336 2.4.935l.866.792a.502.502 0 0 0 .668 0l.866-.792c.657-.6 1.5-.935 2.4-.935 1.988 0 3.6 1.645 3.6 3.676 0 2.944-2.744 6.34-7.195 9.311Z"
            clipRule="evenodd"
            opacity={0.24}
          />
        </svg>
      ),
      music: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          height={20}
          fill="none"
          {...props}
        >
          <path
            fill="#000"
            fillRule="evenodd"
            d="M14.85 17.273c1.74 0 3.15-1.425 3.15-3.182V.93a.9.9 0 0 0-1.106-.905L5.228 2.791c-.402.095-.677.449-.728.846v10.306a3.11 3.11 0 0 0-1.35-.306C1.41 13.637 0 15.06 0 16.818 0 18.576 1.41 20 3.15 20s3.15-1.424 3.15-3.182V8.041l9.9-2.348v5.523a3.112 3.112 0 0 0-1.35-.307c-1.74 0-3.15 1.425-3.15 3.182s1.41 3.182 3.15 3.182ZM6.3 6.173V4.404l9.9-2.347v1.768L6.3 6.173Zm9.9 7.918c0-.753-.604-1.364-1.35-1.364-.746 0-1.35.611-1.35 1.364 0 .753.604 1.364 1.35 1.364.746 0 1.35-.61 1.35-1.364ZM3.15 15.455c.746 0 1.35.61 1.35 1.363s-.604 1.364-1.35 1.364c-.746 0-1.35-.61-1.35-1.364 0-.753.604-1.363 1.35-1.363Z"
            clipRule="evenodd"
            opacity={0.24}
          />
        </svg>
      ),
      games: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={22}
          height={16}
          fill="none"
          {...props}
        >
          <path
            fill="#000"
            fillRule="evenodd"
            d="M12.903.523C12.107.811 11.768.89 11 .89S9.892.811 9.096.523L9.034.501C8.03.138 7.432 0 6.445 0 4.051 0 1.852 2.283.943 5.065.245 7.2.059 8.567 0 11.539.058 14.493 1.34 15.986 3.66 16c1.455-.008 2.452-.637 3.374-1.78.142-.175.534-.697.575-.753l.004-.005c.95-1.227 1.93-1.897 3.39-1.906 1.453.01 2.435.679 3.384 1.907l.003.004c.042.056.433.578.575.754.922 1.142 1.92 1.77 3.363 1.779 2.33-.014 3.613-1.508 3.672-4.427-.06-3.006-.246-4.373-.943-6.508C20.147 2.283 17.949 0 15.554 0c-.987 0-1.584.138-2.588.5l-.063.023ZM8.456 2.19c.986.356 1.625.478 2.544.478.918 0 1.558-.122 2.544-.478l.062-.022c.818-.296 1.222-.39 1.948-.39 1.425 0 3.06 1.698 3.755 3.825.637 1.95.802 3.156.858 5.97-.04 1.99-.601 2.643-1.84 2.65-.773-.004-1.308-.34-1.918-1.097a40.522 40.522 0 0 1-.505-.661v-.001l-.05-.067c-1.259-1.627-2.69-2.604-4.86-2.618-2.158.014-3.59.99-4.848 2.618l-.05.067c-.117.155-.404.536-.505.662-.61.756-1.145 1.093-1.93 1.097-1.227-.007-1.788-.66-1.828-2.684.056-2.78.22-3.985.858-5.936.695-2.127 2.33-3.824 3.754-3.824.727 0 1.13.093 1.949.389l.062.022Zm7.127 3.589c-.506 0-.917-.398-.917-.89 0-.49.41-.888.917-.888.506 0 .917.398.917.889 0 .49-.41.889-.917.889Zm-.917 2.666c0 .491.41.89.917.89.506 0 .917-.399.917-.89 0-.49-.41-.888-.917-.888-.506 0-.917.398-.917.888Zm2.75-.888c-.506 0-.916-.398-.916-.89 0-.49.41-.888.916-.888.507 0 .917.398.917.889 0 .49-.41.889-.916.889Zm-4.583-.89c0 .492.41.89.917.89.506 0 .916-.398.916-.89 0-.49-.41-.888-.916-.888s-.917.398-.917.889ZM6.416 9.334c-1.518 0-2.75-1.194-2.75-2.666C3.667 5.194 4.899 4 6.417 4c1.52 0 2.75 1.194 2.75 2.667 0 1.472-1.23 2.666-2.75 2.666Zm.917-2.666c0 .49-.41.889-.917.889-.506 0-.916-.398-.916-.89 0-.49.41-.888.917-.888.506 0 .916.398.916.889Z"
            clipRule="evenodd"
            opacity={0.24}
          />
        </svg>
      ),
      more: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={14}
          height={8}
          fill="none"
          {...props}
        >
          <path
            fill="#000"
            d="m6.67 5.255 4.95-4.95a1 1 0 1 1 1.413 1.414L7.376 7.376a1 1 0 0 1-1.414 0L.305 1.72A1 1 0 1 1 1.72.305l4.95 4.95Z"
            opacity={0.24}
          />
        </svg>
      ),
}