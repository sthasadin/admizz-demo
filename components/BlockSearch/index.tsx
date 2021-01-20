import React from "react";

const BlockSearch = () => {
  return (
    <div className="block-search">
      <div className="block-search__inner">
        <div className="block-search__icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.3194 13.433C16.5664 11.8254 17.1541 9.80303 16.9629 7.77746C16.7717 5.75189 15.8161 3.87522 14.2904 2.52925C12.7646 1.18328 10.7834 0.469117 8.74984 0.532045C6.71624 0.594973 4.783 1.43027 3.34341 2.868C1.90256 4.30672 1.06454 6.24072 1.0001 8.27586C0.935672 10.311 1.64968 12.2941 2.99663 13.8211C4.34359 15.3481 6.2221 16.304 8.24938 16.4941C10.2767 16.6841 12.3001 16.094 13.9074 14.844L13.9504 14.889L18.1924 19.132C18.2853 19.2249 18.3956 19.2986 18.517 19.3489C18.6384 19.3992 18.7685 19.4251 18.8999 19.4251C19.0313 19.4251 19.1614 19.3992 19.2828 19.3489C19.4042 19.2986 19.5145 19.2249 19.6074 19.132C19.7003 19.0391 19.774 18.9288 19.8243 18.8074C19.8746 18.686 19.9005 18.5559 19.9005 18.4245C19.9005 18.2931 19.8746 18.163 19.8243 18.0416C19.774 17.9202 19.7003 17.8099 19.6074 17.717L15.3644 13.475C15.3498 13.4606 15.3348 13.4466 15.3194 13.433ZM13.2434 4.283C13.808 4.83848 14.257 5.50025 14.5646 6.23013C14.8722 6.96002 15.0322 7.74358 15.0354 8.53562C15.0386 9.32765 14.885 10.1125 14.5834 10.8449C14.2818 11.5772 13.8382 12.2426 13.2781 12.8027C12.718 13.3627 12.0526 13.8064 11.3203 14.108C10.5879 14.4096 9.80306 14.5632 9.01103 14.56C8.21899 14.5568 7.43543 14.3968 6.70554 14.0892C5.97565 13.7816 5.31389 13.3326 4.75841 12.768C3.64832 11.6397 3.02906 10.1184 3.03551 8.53562C3.04195 6.9528 3.67358 5.43664 4.79282 4.31741C5.91205 3.19817 7.4282 2.56654 9.01103 2.5601C10.5938 2.55365 12.1151 3.17292 13.2434 4.283Z"
              fill="#4F4F4F"
            />
          </svg>
        </div>
        <input type="text" placeholder="Enter Your Issue here" />
        <div className="block-search__btn">Search</div>
      </div>
    </div>
  );
};

export { BlockSearch };
