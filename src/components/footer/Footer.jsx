import './footer.scss';

export const Footer = () => {
  return (
    <div className="footer-container">
      <section className="center">
        <div className='footer-content'>
          <p className='footer-content__title'>Все права защищены Российской Ассоциацией Капибар</p>
          <a className='footer-content__logo'>
            <svg
              width="194"
              height="30"
              viewBox="0 0 194 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.23082 14.8799L3.90044 18.3023V23.676H0V2.66149H3.90044V13.4389L14.2816 2.66149H18.6621L9.84111 12.058L19.2022 23.676H14.6417L7.23082 14.8799Z"
                fill="white"
              />
              <path
                d="M27.2377 7.4648C29.5979 7.4648 31.3981 8.0352 32.6383 9.17598C33.8984 10.2968 34.5285 11.9979 34.5285 14.2795V23.676H30.9881V21.7246C30.5281 22.4251 29.868 22.9655 29.0079 23.3458C28.1678 23.706 27.1477 23.8861 25.9475 23.8861C24.7474 23.8861 23.6973 23.686 22.7972 23.2857C21.8971 22.8654 21.197 22.295 20.6969 21.5745C20.2169 20.834 19.9769 20.0035 19.9769 19.0828C19.9769 17.6418 20.5069 16.491 21.567 15.6304C22.6472 14.7498 24.3374 14.3095 26.6376 14.3095H30.7781V14.0694C30.7781 12.9486 30.438 12.088 29.758 11.4876C29.0979 10.8872 28.1078 10.587 26.7876 10.587C25.8875 10.587 24.9974 10.7271 24.1173 11.0072C23.2572 11.2874 22.5272 11.6777 21.9271 12.1781L20.4569 9.44617C21.297 8.80573 22.3071 8.31539 23.4873 7.97516C24.6674 7.63492 25.9175 7.4648 27.2377 7.4648ZM26.7276 21.1542C27.6677 21.1542 28.4978 20.9441 29.2179 20.5238C29.958 20.0835 30.478 19.4631 30.7781 18.6625V16.8012H26.9076C24.7474 16.8012 23.6673 17.5117 23.6673 18.9327C23.6673 19.6132 23.9373 20.1536 24.4774 20.5538C25.0174 20.9541 25.7675 21.1542 26.7276 21.1542Z"
                fill="white"
              />
              <path
                d="M48.2227 7.4648C49.7829 7.4648 51.173 7.80504 52.3932 8.48551C53.6333 9.16598 54.6034 10.1266 55.3035 11.3675C56.0036 12.6083 56.3536 14.0393 56.3536 15.6605C56.3536 17.2816 56.0036 18.7226 55.3035 19.9834C54.6034 21.2243 53.6333 22.185 52.3932 22.8654C51.173 23.5459 49.7829 23.8861 48.2227 23.8861C46.0625 23.8861 44.3523 23.1656 43.0921 21.7246V29.5H39.3417V7.64493H42.9121V9.74638C43.5322 8.98585 44.2923 8.41546 45.1924 8.0352C46.1125 7.65493 47.1226 7.4648 48.2227 7.4648ZM47.8027 20.6739C49.1828 20.6739 50.3129 20.2136 51.193 19.293C52.0931 18.3723 52.5432 17.1615 52.5432 15.6605C52.5432 14.1594 52.0931 12.9486 51.193 12.028C50.3129 11.1073 49.1828 10.647 47.8027 10.647C46.9026 10.647 46.0925 10.8571 45.3724 11.2774C44.6523 11.6777 44.0822 12.2581 43.6622 13.0186C43.2421 13.7792 43.0321 14.6598 43.0321 15.6605C43.0321 16.6611 43.2421 17.5418 43.6622 18.3023C44.0822 19.0628 44.6523 19.6532 45.3724 20.0735C46.0925 20.4738 46.9026 20.6739 47.8027 20.6739Z"
                fill="white"
              />
              <path
                d="M59.9104 7.64493H63.6609V23.676H59.9104V7.64493ZM61.8006 5.0031C61.1206 5.0031 60.5505 4.79296 60.0904 4.37267C59.6304 3.93237 59.4004 3.39199 59.4004 2.75155C59.4004 2.11111 59.6304 1.58074 60.0904 1.16045C60.5505 0.720151 61.1206 0.5 61.8006 0.5C62.4807 0.5 63.0508 0.710145 63.5108 1.13043C63.9709 1.53071 64.2009 2.04106 64.2009 2.66149C64.2009 3.32194 63.9709 3.88233 63.5108 4.34265C63.0708 4.78295 62.5007 5.0031 61.8006 5.0031Z"
                fill="white"
              />
              <path
                d="M77.4643 7.4648C79.0245 7.4648 80.4146 7.80504 81.6348 8.48551C82.8749 9.16598 83.845 10.1266 84.5451 11.3675C85.2452 12.6083 85.5952 14.0393 85.5952 15.6605C85.5952 17.2816 85.2452 18.7226 84.5451 19.9834C83.845 21.2243 82.8749 22.185 81.6348 22.8654C80.4146 23.5459 79.0245 23.8861 77.4643 23.8861C76.3642 23.8861 75.354 23.696 74.4339 23.3157C73.5338 22.9355 72.7738 22.3651 72.1537 21.6046V23.676H68.5833V1.40062H72.3337V9.59627C72.9738 8.89579 73.7239 8.36542 74.584 8.00518C75.4641 7.64493 76.4242 7.4648 77.4643 7.4648ZM77.0442 20.6739C78.4244 20.6739 79.5545 20.2136 80.4346 19.293C81.3347 18.3723 81.7848 17.1615 81.7848 15.6605C81.7848 14.1594 81.3347 12.9486 80.4346 12.028C79.5545 11.1073 78.4244 10.647 77.0442 10.647C76.1441 10.647 75.334 10.8571 74.614 11.2774C73.8939 11.6777 73.3238 12.2581 72.9038 13.0186C72.4837 13.7792 72.2737 14.6598 72.2737 15.6605C72.2737 16.6611 72.4837 17.5418 72.9038 18.3023C73.3238 19.0628 73.8939 19.6532 74.614 20.0735C75.334 20.4738 76.1441 20.6739 77.0442 20.6739Z"
                fill="white"
              />
              <path
                d="M95.0676 7.4648C97.4279 7.4648 99.2281 8.0352 100.468 9.17598C101.728 10.2968 102.358 11.9979 102.358 14.2795V23.676H98.818V21.7246C98.358 22.4251 97.6979 22.9655 96.8378 23.3458C95.9977 23.706 94.9776 23.8861 93.7775 23.8861C92.5773 23.8861 91.5272 23.686 90.6271 23.2857C89.727 22.8654 89.0269 22.295 88.5269 21.5745C88.0468 20.834 87.8068 20.0035 87.8068 19.0828C87.8068 17.6418 88.3368 16.491 89.3969 15.6304C90.4771 14.7498 92.1673 14.3095 94.4675 14.3095H98.608V14.0694C98.608 12.9486 98.268 12.088 97.5879 11.4876C96.9278 10.8872 95.9377 10.587 94.6175 10.587C93.7174 10.587 92.8273 10.7271 91.9472 11.0072C91.0871 11.2874 90.3571 11.6777 89.757 12.1781L88.2868 9.44617C89.1269 8.80573 90.137 8.31539 91.3172 7.97516C92.4973 7.63492 93.7475 7.4648 95.0676 7.4648ZM94.5575 21.1542C95.4976 21.1542 96.3277 20.9441 97.0478 20.5238C97.7879 20.0835 98.308 19.4631 98.608 18.6625V16.8012H94.7376C92.5773 16.8012 91.4972 17.5117 91.4972 18.9327C91.4972 19.6132 91.7672 20.1536 92.3073 20.5538C92.8473 20.9541 93.5974 21.1542 94.5575 21.1542Z"
                fill="white"
              />
              <path
                d="M110.742 9.98654C111.822 8.30538 113.722 7.4648 116.443 7.4648V11.0373C116.123 10.9772 115.833 10.9472 115.573 10.9472C114.112 10.9472 112.972 11.3775 112.152 12.2381C111.332 13.0787 110.922 14.2995 110.922 15.9006V23.676H107.172V7.64493H110.742V9.98654Z"
                fill="white"
              />
              <path
                d="M125.657 7.4648C128.017 7.4648 129.817 8.0352 131.058 9.17598C132.318 10.2968 132.948 11.9979 132.948 14.2795V23.676H129.407V21.7246C128.947 22.4251 128.287 22.9655 127.427 23.3458C126.587 23.706 125.567 23.8861 124.367 23.8861C123.167 23.8861 122.117 23.686 121.216 23.2857C120.316 22.8654 119.616 22.295 119.116 21.5745C118.636 20.834 118.396 20.0035 118.396 19.0828C118.396 17.6418 118.926 16.491 119.986 15.6304C121.066 14.7498 122.757 14.3095 125.057 14.3095H129.197V14.0694C129.197 12.9486 128.857 12.088 128.177 11.4876C127.517 10.8872 126.527 10.587 125.207 10.587C124.307 10.587 123.417 10.7271 122.537 11.0072C121.677 11.2874 120.946 11.6777 120.346 12.1781L118.876 9.44617C119.716 8.80573 120.726 8.31539 121.907 7.97516C123.087 7.63492 124.337 7.4648 125.657 7.4648ZM125.147 21.1542C126.087 21.1542 126.917 20.9441 127.637 20.5238C128.377 20.0835 128.897 19.4631 129.197 18.6625V16.8012H125.327C123.167 16.8012 122.087 17.5117 122.087 18.9327C122.087 19.6132 122.357 20.1536 122.897 20.5538C123.437 20.9541 124.187 21.1542 125.147 21.1542Z"
                fill="white"
              />
              <path
                d="M141.016 2.66149H144.916V20.3737H155.898V23.676H141.016V2.66149Z"
                fill="white"
              />
              <path
                d="M164.884 7.4648C167.244 7.4648 169.045 8.0352 170.285 9.17598C171.545 10.2968 172.175 11.9979 172.175 14.2795V23.676H168.634V21.7246C168.174 22.4251 167.514 22.9655 166.654 23.3458C165.814 23.706 164.794 23.8861 163.594 23.8861C162.394 23.8861 161.344 23.686 160.444 23.2857C159.543 22.8654 158.843 22.295 158.343 21.5745C157.863 20.834 157.623 20.0035 157.623 19.0828C157.623 17.6418 158.153 16.491 159.213 15.6304C160.294 14.7498 161.984 14.3095 164.284 14.3095H168.424V14.0694C168.424 12.9486 168.084 12.088 167.404 11.4876C166.744 10.8872 165.754 10.587 164.434 10.587C163.534 10.587 162.644 10.7271 161.764 11.0072C160.904 11.2874 160.174 11.6777 159.573 12.1781L158.103 9.44617C158.943 8.80573 159.954 8.31539 161.134 7.97516C162.314 7.63492 163.564 7.4648 164.884 7.4648ZM164.374 21.1542C165.314 21.1542 166.144 20.9441 166.864 20.5238C167.604 20.0835 168.124 19.4631 168.424 18.6625V16.8012H164.554C162.394 16.8012 161.314 17.5117 161.314 18.9327C161.314 19.6132 161.584 20.1536 162.124 20.5538C162.664 20.9541 163.414 21.1542 164.374 21.1542Z"
                fill="white"
              />
              <path
                d="M185.869 7.4648C187.429 7.4648 188.819 7.80504 190.04 8.48551C191.28 9.16598 192.25 10.1266 192.95 11.3675C193.65 12.6083 194 14.0393 194 15.6605C194 17.2816 193.65 18.7226 192.95 19.9834C192.25 21.2243 191.28 22.185 190.04 22.8654C188.819 23.5459 187.429 23.8861 185.869 23.8861C184.769 23.8861 183.759 23.696 182.839 23.3157C181.939 22.9355 181.179 22.3651 180.558 21.6046V23.676H176.988V1.40062H180.739V9.59627C181.379 8.89579 182.129 8.36542 182.989 8.00518C183.869 7.64493 184.829 7.4648 185.869 7.4648ZM185.449 20.6739C186.829 20.6739 187.959 20.2136 188.839 19.293C189.74 18.3723 190.19 17.1615 190.19 15.6605C190.19 14.1594 189.74 12.9486 188.839 12.028C187.959 11.1073 186.829 10.647 185.449 10.647C184.549 10.647 183.739 10.8571 183.019 11.2774C182.299 11.6777 181.729 12.2581 181.309 13.0186C180.889 13.7792 180.678 14.6598 180.678 15.6605C180.678 16.6611 180.889 17.5418 181.309 18.3023C181.729 19.0628 182.299 19.6532 183.019 20.0735C183.739 20.4738 184.549 20.6739 185.449 20.6739Z"
                fill="white"
              />
              <path
                d="M80.189 15.6705C80.189 17.3285 78.8457 18.6725 77.1887 18.6725C75.5317 18.6725 74.1884 17.3285 74.1884 15.6705C74.1884 14.0125 75.5317 12.6684 77.1887 12.6684C78.8457 12.6684 80.189 14.0125 80.189 15.6705Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};
