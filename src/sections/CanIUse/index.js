/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import styles from "./style.module.scss";

const CanIUse = () => {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.h2}>
        Can I{" "}
        <a
          href="https://ishoudinireadyyet.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          use it
        </a>{" "}
        today?
      </h2>

      <div className={styles.cards}>
        <div
          className={styles.card}
          style={{ background: "#C9FFD8", flex: 1.5 }}
        >
          <svg
            className={styles.cardSvg}
            viewBox="0 0 152 46"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.4041 23.0016C14.4041 27.7416 18.2601 31.5976 22.9998 31.5976C27.7393 31.5976 31.595 27.7414 31.595 23.0016C31.595 18.2616 27.7393 14.4053 22.9998 14.4053C18.2601 14.4053 14.4041 18.2616 14.4041 23.0016Z" />
            <path d="M42.7926 11.6546C42.8595 11.5368 42.8583 11.3921 42.7891 11.2755C40.787 7.90325 37.9377 5.07849 34.5494 3.10667C31.0572 1.07422 27.0634 0 23.0002 0C15.9683 0 9.41494 3.15599 5.0204 8.65877C4.92342 8.78004 4.91075 8.94821 4.98842 9.0826L11.4631 20.2977C11.5309 20.4153 11.6561 20.4862 11.7894 20.4862C11.8063 20.4862 11.8235 20.485 11.8406 20.4827C11.9923 20.4621 12.1164 20.3517 12.1547 20.2034C13.4314 15.2563 17.8912 11.8012 23.0002 11.8012C23.3172 11.8012 23.6447 11.8157 23.9738 11.8437C23.9845 11.8448 23.9953 11.8452 24.006 11.8452H42.4649C42.6004 11.8452 42.7256 11.7725 42.7926 11.6546Z" />
            <path d="M26.3985 33.9256C26.3049 33.8044 26.1477 33.7524 25.9994 33.7934C25.0256 34.0646 24.0165 34.202 22.9998 34.202C18.6802 34.202 14.6991 31.6684 12.8571 27.7474C12.8526 27.7377 12.8476 27.7283 12.8423 27.719L3.60622 11.7206C3.53896 11.6037 3.41438 11.5321 3.2797 11.5321H3.27774C3.1423 11.5328 3.01758 11.606 2.95122 11.7239C1.02059 15.1501 0 19.0498 0 23.0016C0 28.5454 1.99985 33.9004 5.63111 38.08C9.22632 42.2181 14.1759 44.9414 19.5684 45.7483C19.5871 45.7512 19.6058 45.7524 19.6243 45.7524C19.7575 45.7524 19.8827 45.6815 19.9507 45.5638L26.427 34.3453C26.5036 34.2126 26.4923 34.0467 26.3985 33.9256Z" />
            <path d="M44.0658 14.3612H31.0993C30.9461 14.3612 30.8081 14.454 30.7503 14.5957C30.6924 14.7375 30.726 14.9004 30.8354 15.0075C33.0049 17.1345 34.1997 19.9735 34.1997 23.0016C34.1997 25.2939 33.508 27.4999 32.1994 29.3814C32.1933 29.3902 32.1877 29.3991 32.1825 29.4083L22.9304 45.4344C22.8626 45.5517 22.8631 45.6964 22.9314 45.8134C22.9991 45.9291 23.1231 46 23.2569 46C23.2582 46 23.2597 46 23.2611 46C29.3496 45.9321 35.0631 43.5096 39.3488 39.1791C43.6379 34.845 46 29.0997 46 23.0016C46 20.103 45.4673 17.2766 44.4167 14.6006C44.36 14.4561 44.2208 14.3612 44.0658 14.3612Z" />
            <path d="M80.7749 27.1625C80.7425 27.2046 80.6947 27.2502 80.6403 27.3023C80.4558 27.4788 80.1948 27.7285 80.1948 28.1574C80.1948 28.6161 80.4937 29.0573 81.0245 29.4282C83.5106 31.1571 88.1615 30.961 88.3252 30.9541L88.3296 30.9539C90.2025 30.9494 92.0399 30.4426 93.6502 29.4862C95.2747 28.5377 96.623 27.1809 97.5612 25.5504C98.4995 23.92 98.9951 22.0725 98.999 20.1914C99.0423 16.4565 97.7393 13.9084 97.1036 12.6654C97.0689 12.5974 97.0361 12.5334 97.0057 12.4732C93.2811 5.18748 85.2413 0.99707 76.4984 0.99707C70.5857 0.996486 64.9105 3.32341 60.7001 7.47457C56.4974 11.6182 54.0914 17.247 54 23.1474C54.0078 22.6704 54.0504 22.2004 54.1256 21.7388C54.0554 22.2307 54.0192 22.7211 54.0192 23.2063C53.9887 26.6048 54.7159 29.9673 56.1478 33.0496C58.4879 38.0425 62.5801 42.0022 67.6473 44.1768C72.7145 46.3514 78.4039 46.5894 83.635 44.8456C83.1157 45.0094 82.588 45.1406 82.0551 45.2391C82.633 45.1162 83.1745 44.9767 83.6139 44.838L83.8441 44.7607C88.6871 43.0864 92.8157 39.8133 95.5506 35.4799C95.6343 35.3479 95.6717 35.1918 95.6569 35.0362C95.642 34.8806 95.5757 34.7344 95.4684 34.6207C95.3612 34.507 95.2191 34.4323 95.0646 34.4083C94.9101 34.3844 94.7521 34.4126 94.6155 34.4886C94.0155 34.8023 93.3968 35.0788 92.7628 35.3164C90.7449 36.0715 88.6072 36.4562 86.4526 36.4519C78.1351 36.4519 70.8897 30.7306 70.8897 23.3886C70.9004 22.4038 71.1737 21.4398 71.6813 20.5959C72.1868 19.7557 72.9065 19.0649 73.7665 18.5943C73.7702 18.5925 73.774 18.5906 73.7777 18.5888L73.8427 18.5581C74.3986 18.2952 75.3109 17.8637 76.5092 17.8857C77.3872 17.8921 78.2518 18.1017 79.0352 18.4982C79.8186 18.8946 80.4996 19.4671 81.0248 20.1707C81.6783 21.0433 82.0618 22.0858 82.1317 23.1696C82.1365 23.2597 82.1399 23.3443 82.1422 23.423L82.1427 23.4507L82.143 23.4493C82.145 23.5268 82.1459 23.5982 82.1459 23.6629C82.1459 24.6068 81.6643 26.0059 80.7749 27.1625ZM82.143 23.4493L82.1422 23.423C82.1406 23.3383 82.1371 23.2538 82.1317 23.1696C82.0713 22.0438 81.7954 20.0783 80.8663 18.4741C79.8205 16.6689 78.3158 14.8479 75.4437 13.3398C72.1849 11.6295 68.6765 11.5698 68.0613 11.5698C61.0448 11.5698 55.0609 15.9986 54.1256 21.7388C54.9855 15.7175 60.9473 9.45919 68.0809 9.45919C86.0188 9.45919 82.3289 22.7777 82.1492 23.4262C82.1458 23.4385 82.1437 23.4462 82.143 23.4493ZM68.99 22.4262C70.2843 20.8164 71.9144 19.5087 73.7665 18.5943C73.7702 18.5925 73.774 18.5906 73.7777 18.5888C66.2547 18.9052 64.3211 26.744 64.3211 31.337C64.3211 44.323 76.2895 45.6395 78.868 45.6395C79.773 45.6395 80.9774 45.4683 82.0551 45.2391C80.7084 45.488 79.3281 45.5276 77.9632 45.3537C76.0581 45.1109 74.2283 44.4578 72.6 43.4395L72.5842 43.4324C71.0164 42.4594 69.6577 41.1843 68.5871 39.6814C67.3669 38.0097 66.5272 36.0911 66.127 34.0604C65.7267 32.0298 65.7756 29.9361 66.2702 27.9263C66.7647 25.9165 67.693 24.0393 68.99 22.4262Z" />
            <path d="M128.428 45.9737C128.784 45.9904 129.141 46 129.5 46C135.261 46 140.514 43.8338 144.495 40.274C141.857 42.0232 138.774 43.0294 135.478 43.0294C130.12 43.0294 125.322 40.3714 122.094 36.1797C119.607 33.2429 117.995 28.9017 117.885 24.03V22.9704C117.995 18.0987 119.607 13.757 122.094 10.8207C125.322 6.62898 130.12 3.97098 135.478 3.97098C138.775 3.97098 141.859 4.97726 144.497 6.72754C140.535 3.18401 135.313 1.02246 129.585 1.00112C129.557 1.00112 129.529 1 129.5 1C117.074 1 107 11.0732 107 23.5C107 35.5668 116.499 45.4146 128.428 45.9737Z" />
            <path d="M137.96 41.439C140.586 41.439 143.166 40.7162 145.47 39.3461C149.505 35.2794 152 29.6816 152 23.5C152 17.3187 149.505 11.7211 145.471 7.65486C143.167 6.28446 140.587 5.56159 137.961 5.56159C135.704 5.56159 133.503 6.09515 131.487 7.09312C137.208 8.27546 141.598 15.1704 141.598 23.5C141.598 31.83 137.208 38.7252 131.486 39.907C133.503 40.9054 135.703 41.439 137.96 41.439Z" />
          </svg>
          <h2 className={styles.cardHeader}>Chrome, Edge, Opera</h2>
        </div>

        <div className={styles.card} style={{ background: "#FFDEBF", flex: 1 }}>
          <svg
            className={styles.cardSvg}
            viewBox="0 0 64 64"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M32 0C14.3234 0 0 14.3234 0 32C0 49.6766 14.3234 64 32 64C49.6766 64 64 49.6766 64 32C64 14.3234 49.6766 0 32 0ZM36.9725 4.4363L37.9516 4.6335L36.78 10.5167L35.8008 10.3206L36.9725 4.4363ZM27.0275 59.5531L26.0484 59.3558L27.22 53.4727L28.1992 53.6687L27.0275 59.5531ZM39.6477 5.0564L40.6032 5.3481L39.7316 8.2206L38.776 7.9289L39.6477 5.0564ZM24.3522 58.94L23.3967 58.6482L24.2683 55.7758L25.2239 56.0675L24.3522 58.94ZM43.1804 6.32L40.8831 11.8642L39.9595 11.4804L42.2555 5.9362L43.1804 6.32ZM20.8278 57.6764L23.1238 52.1334L24.0475 52.5173L21.7515 58.0603L20.8278 57.6764ZM44.7572 7.069L45.636 7.5402L44.2245 10.1848L43.3445 9.7123L44.7572 7.069ZM19.2427 56.9287L18.3639 56.4562L19.7801 53.8129L20.6601 54.2842L19.2427 56.9287ZM56.9333 19.2416L54.2911 20.6566L53.8199 19.7766L56.4597 18.3616C56.1761 17.8515 55.876 17.3509 55.5597 16.8604L50.573 20.1971L50.025 19.3609L55.0128 16.0242C54.6774 15.5482 54.3289 15.0888 53.9652 14.6246L51.6537 16.525L51.0171 15.749L53.3285 13.8486C52.9518 13.4092 52.5525 12.984 52.1521 12.5612L50.5871 14.1262L36.0004 36.0017L14.1238 50.5897L12.5493 52.1547C12.9733 52.555 13.4021 52.9543 13.8486 53.3299L15.749 51.0184L16.525 51.655L14.6246 53.9665C15.0769 54.3267 15.5482 54.6669 16.0242 55.0023L19.3372 50.0145L20.1734 50.5625L16.8368 55.5492C20.3482 57.8134 24.3829 59.3122 28.7366 59.813L29.0248 56.826L30.024 56.9252L29.7358 59.9122C30.3228 59.9642 30.8992 59.9878 31.4874 60.0008V53.9996H32.4878V60.0008C33.076 59.9878 33.6642 59.9606 34.2406 59.9122L33.9418 56.9252L34.941 56.826L35.2398 59.813C35.8268 59.7445 36.402 59.656 36.9784 59.5532L35.8079 53.6759L36.7883 53.4799L37.9576 59.3595C38.5316 59.2355 39.0914 59.089 39.6513 58.9295L38.7784 56.0595L39.734 55.7677L40.6068 58.6402L39.6725 58.926C40.5525 58.6756 41.41 58.3815 42.2521 58.052L39.9596 52.5173L40.8832 52.1333L43.1769 57.6693C43.7119 57.4378 44.2317 57.1886 44.7489 56.924L43.3352 54.2842L44.2152 53.8129L45.6301 56.4551C46.1427 56.1704 46.6494 55.8775 47.1396 55.5598L43.8029 50.5731L44.6391 50.0251L47.9758 55.0129C48.4518 54.6775 48.9112 54.3291 49.3754 53.9653L47.475 51.6538L48.251 51.0172L50.1514 53.3405C50.5861 52.9649 51.016 52.5657 51.4388 52.1641L47.2033 47.9286L47.9143 47.2164L52.151 51.4531C52.5514 51.0279 52.9507 50.6051 53.3274 50.1526L51.016 48.2522L51.6526 47.4762L53.9641 49.3767L53.9664 49.3755C54.3267 48.9113 54.6786 48.4518 55.0023 47.9995L50.0144 44.6628L50.5624 43.8266L55.5491 47.1632C56.3641 45.9006 57.0716 44.5648 57.6787 43.1758L52.1357 40.8808L52.5196 39.9572L58.0637 42.2533C58.933 40.0458 59.5318 37.7073 59.8129 35.2635L56.8259 34.9753L56.9251 33.9761L59.9121 34.2643C59.9641 33.6773 59.9877 33.1009 60.0007 32.5127L53.9995 32.5115V31.5123H60.0007C59.9877 30.9241 59.9606 30.3359 59.9122 29.7595L56.9252 30.0583L56.8259 29.0591L59.8129 28.7603C59.4327 25.4402 58.4572 22.2157 56.9333 19.2416ZM7.0854 44.7573L9.7252 43.3435L10.1965 44.2235L7.5555 45.6384C7.8365 46.151 8.1295 46.6506 8.4472 47.1396L13.4351 43.8029L13.9867 44.6392L8.9988 47.9758V47.9723C9.3342 48.4483 9.6708 48.9207 10.0347 49.3719L12.3461 47.4715L12.9827 48.2475L10.6713 50.1479C11.048 50.5837 11.4473 51.0125 11.8477 51.4365L13.4127 49.8715L27.9993 27.995L49.876 13.4081L51.4753 11.8431C51.0501 11.4427 50.6273 11.0435 50.1749 10.6667L48.2744 12.9782L47.4984 12.3416L49.399 10.03C48.9525 9.671 48.4753 9.3308 47.9993 8.9942L44.6627 13.982L43.8265 13.4305L47.1631 8.4426C43.6517 6.1796 39.617 4.6796 35.2633 4.1799L34.9751 7.1669L33.9759 7.0666L34.2641 4.0796C33.6771 4.0288 33.1007 4.004 32.5125 3.9922V9.9922H31.5085V3.9922C30.9203 4.004 30.3322 4.0312 29.7558 4.0796L30.0558 7.0666L29.0565 7.167L28.7565 4.18C24.4088 4.6796 20.3695 6.1678 16.8579 8.432L20.1946 13.4198L19.3584 13.9714L16.0217 8.9836C15.5457 9.3237 15.0851 9.6721 14.6221 10.0359L16.5213 12.3474L15.7465 12.984L13.8461 10.6607C13.4055 11.0375 12.9815 11.4367 12.5575 11.8371L16.7942 16.0726L16.082 16.7848L11.8453 12.5493C11.4449 12.9733 11.0457 13.4021 10.6701 13.8486L12.9815 15.749L12.3449 16.525L10.0334 14.6246C9.6732 15.0769 9.333 15.5482 8.9976 16.0242L13.9973 19.3372L13.4457 20.1735L8.4578 16.8368C8.1357 17.3365 7.83004 17.8466 7.5413 18.3663L10.1846 19.7754L9.7122 20.6601L7.07 19.2474C6.80682 19.7638 6.55947 20.288 6.3283 20.8195L11.8713 23.1168L11.4874 24.0404L5.9456 21.7444C5.7306 22.2876 5.5358 22.8404 5.3539 23.4003L8.2204 24.2719L7.9287 25.2274L5.0668 24.3581C4.9086 24.9156 4.7716 25.4791 4.6464 26.0507L10.513 27.22L10.3157 28.1991L4.4491 27.0311C4.3451 27.5932 4.2613 28.1649 4.194 28.7366L7.1822 29.0247L7.0818 30.024L4.0948 29.7358C4.0428 30.3228 4.0192 30.8992 4.0074 31.4874L10.0074 31.4886V32.4878H4.0074C4.0192 33.076 4.0464 33.6642 4.0948 34.2406L7.0818 33.9417L7.1822 34.941L4.194 35.2398C4.2613 35.8233 4.3523 36.3973 4.4527 36.9689L10.3205 35.8009L10.5165 36.7799L4.6464 37.9493C4.7704 38.5245 4.9192 39.0891 5.0774 39.6501L7.9322 38.7831L8.224 39.7387L5.3645 40.6068C5.54364 41.1617 5.7402 41.7108 5.9539 42.2533L11.4803 39.9643L11.8642 40.8879L6.3354 43.1781C6.5669 43.7155 6.8196 44.2387 7.0854 44.7573ZM57.6762 20.8279L58.0601 21.7515L52.5171 24.0476L52.1332 23.124L57.6762 20.8279ZM58.9364 24.3559L56.064 25.2287L55.7722 24.2732L58.6447 23.4004L58.9364 24.3559ZM59.553 27.0276L53.6687 28.1992L53.4727 27.2201L59.3557 26.0484L59.553 27.0276ZM59.3605 37.9518L53.4773 36.78L53.6734 35.8009L59.5577 36.9725L59.3605 37.9518ZM58.6447 40.6034L55.7722 39.7317L56.064 38.7762L58.9365 39.6479L58.6447 40.6034ZM5.98 21.6559L6.3249 20.8279C6.20587 21.1022 6.09089 21.3782 5.98 21.6559ZM56.4526 45.636L53.8034 44.2246L54.2746 43.3446L56.9239 44.7572L56.4526 45.636ZM18.351 7.5404L19.231 7.0691L20.6483 9.7125L19.7683 10.1849L18.351 7.5404ZM21.7515 5.9435L24.0475 11.4877L23.1239 11.8715L20.8279 6.3285L21.7515 5.9435ZM24.3523 5.0565L25.2239 7.929L24.2684 8.2207L23.3967 5.3482L24.3523 5.0565ZM27.0323 4.4447L28.2039 10.3278L27.2247 10.5251L26.0531 4.6407L27.0323 4.4447ZM59.9003 29.5529L59.8365 28.8891C59.8495 29.1123 59.8732 29.3237 59.9003 29.5529ZM55.5243 16.8004L55.0719 16.1248C55.2196 16.348 55.3707 16.5724 55.5243 16.8004ZM53.788 14.4122L53.5117 14.0755C53.6109 14.1877 53.6995 14.2999 53.788 14.4122ZM49.9116 10.4767L49.5762 10.2003C49.7002 10.2995 49.8006 10.3869 49.9116 10.4767ZM47.8754 8.9235L47.1998 8.4759C47.423 8.6294 47.6521 8.7759 47.8754 8.9235ZM35.111 4.1765L34.4354 4.1128C34.6586 4.1258 34.8877 4.1493 35.111 4.1765ZM29.5526 4.0998L28.877 4.1636C29.1003 4.1506 29.3235 4.127 29.5526 4.0998ZM16.8001 8.4758L16.1245 8.9235C16.3478 8.7711 16.5722 8.6246 16.8001 8.4758ZM14.4119 10.2121L14.0883 10.4767C14.1993 10.3893 14.2997 10.3007 14.4119 10.2121ZM10.4764 14.0885L10.2 14.424C10.2993 14.3118 10.3867 14.1996 10.4764 14.0885ZM8.9233 16.1248L8.4756 16.8004C8.6292 16.5771 8.7756 16.3527 8.9233 16.1248ZM4.1764 28.889L4.1127 29.5646C4.1257 29.3413 4.1493 29.1169 4.1764 28.889ZM4.0997 34.452L4.1635 35.1276C4.1505 34.9044 4.1268 34.6765 4.0997 34.452ZM8.4757 47.188L8.9234 47.8636C8.771 47.6522 8.6245 47.4278 8.4757 47.188ZM10.4765 49.9117C10.3891 49.8007 10.3005 49.7003 10.212 49.5881L10.4765 49.9117ZM14.0884 53.5236L14.412 53.7881C14.2998 53.7007 14.1994 53.6133 14.0884 53.5236ZM16.1246 55.0637L16.8002 55.5161C16.577 55.3803 16.3526 55.2279 16.1246 55.0637ZM28.8889 59.8237L29.5645 59.8874C29.3413 59.8744 29.1169 59.8509 28.8889 59.8237ZM34.4519 59.9004L35.1158 59.8366C34.8925 59.8496 34.6798 59.8732 34.4519 59.9004ZM47.1998 55.5244L47.8754 55.072C47.6522 55.2196 47.423 55.3708 47.1998 55.5244ZM49.588 53.7881L49.9246 53.5118C49.8124 53.611 49.7002 53.6995 49.588 53.7881ZM53.5235 49.9117L53.7999 49.5763C53.7007 49.6885 53.6133 49.8007 53.5235 49.9117ZM59.9003 34.4355C59.8767 34.6587 59.8637 34.8879 59.8366 35.1111L59.9003 34.4355ZM55.5243 47.1998C55.3755 47.423 55.2243 47.6522 55.0719 47.8754L55.5243 47.1998Z"
            />
          </svg>
          <h2 className={styles.cardHeader}>Safari. Enable by flag</h2>
        </div>
      </div>
    </div>
  );
};

export default CanIUse;
