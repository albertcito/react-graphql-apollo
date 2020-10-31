import React, { useState } from 'react';
import { Affix, Col, Row, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';

import { GlobalContext } from 'use/global';

export default function Header() {
  const { sessions: { user }, logout } = React.useContext(GlobalContext);
  const [afixClass, setAfixClass] = useState('');

  const globalMenu = [
    <Menu.Item key='about-me'>
      <Link to='/about-me'>
        About Me
      </Link>
    </Menu.Item>,
  ];
  const signInMenu = [
    <Menu.Item key='logout'>
      <Button
        className='link-button-menu'
        onClick={() => logout.doLogout()}
      >
        Logout
      </Button>
    </Menu.Item>,
    <Menu.Item key='profile'>
      <Link to='/admin/profile'>
        Profile
      </Link>
    </Menu.Item>,
    <Menu.Item key='users'>
      <Link to='/admin/users'>
        Users
      </Link>
    </Menu.Item>,
  ];

  const signOutMenu = [
    <Menu.Item key='login'>
      <Link to='/login'>
        Login
      </Link>
    </Menu.Item>,
  ];

  return (
    <header className={`header ${afixClass}`}>
      <Affix onChange={(affixed) => setAfixClass(affixed ? 'afixClass' : '')}>
        <div className='content-width'>
          <Row className='menu'>
            <Col xs={24} sm={8} md={12} lg={8} xl={6} className='header-left'>
              <Link to='/' className='logo-url'>
                <svg width='100%' height='100%' viewBox='0 0 998 145' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    // eslint-disable-next-line max-len
                    d='M64.672 13.936L103.552 94.288C105.184 97.552 106 100 106 101.632C106 105.088 103.216 108.208 97.648 110.992C94.384 112.624 91.792 113.44 89.872 113.44C88.048 113.44 86.512 113.008 85.264 112.144C84.112 111.28 83.248 110.368 82.672 109.408C82.192 108.448 81.472 107.008 80.512 105.088L73.024 89.536H33.136L25.648 105.088C24.688 107.008 23.92 108.4 23.344 109.264C22.864 110.128 22 111.04 20.752 112C19.6 112.864 18.064 113.296 16.144 113.296C14.32 113.296 11.776 112.48 8.512 110.848C2.944 108.16 0.16 105.088 0.16 101.632C0.16 100 0.976 97.552 2.608 94.288L41.488 13.792C42.544 11.584 44.128 9.80799 46.24 8.46399C48.448 7.11999 50.752 6.44799 53.152 6.44799C58.336 6.44799 62.176 8.94399 64.672 13.936ZM53.008 48.496L43.504 68.224H62.656L53.008 48.496ZM102.417 13.072C102.417 10.864 102.465 9.232 102.561 8.176C102.753 7.024 103.185 5.72799 103.857 4.288C105.201 1.696 108.945 0.399995 115.089 0.399995C120.945 0.399995 124.593 1.696 126.033 4.288C126.801 5.72799 127.233 7.024 127.329 8.176C127.521 9.32799 127.617 11.008 127.617 13.216V79.888C127.617 83.344 127.905 85.552 128.481 86.512C129.057 87.376 130.305 87.808 132.225 87.808C134.241 87.808 135.585 87.904 136.257 88.096C136.929 88.192 137.745 88.576 138.705 89.248C140.625 90.496 141.585 93.904 141.585 99.472C141.585 105.52 140.625 109.216 138.705 110.56C136.209 112.288 130.257 112.576 120.849 111.424C113.457 110.464 108.657 108.016 106.449 104.08C103.761 99.376 102.417 91.888 102.417 81.616V13.072ZM182.502 36.256C191.046 36.256 198.87 40.048 205.974 47.632C213.174 55.216 216.774 64.048 216.774 74.128C216.774 84.112 213.222 92.896 206.118 100.48C199.014 107.968 191.382 111.712 183.222 111.712C175.062 111.712 169.254 109.408 165.798 104.8C165.03 109.504 160.902 111.856 153.414 111.856C147.366 111.856 143.67 110.56 142.326 107.968C141.654 106.528 141.222 105.28 141.03 104.224C140.934 103.072 140.886 101.392 140.886 99.184V13.216C140.886 11.008 140.934 9.37599 141.03 8.32C141.222 7.16799 141.654 5.91999 142.326 4.57599C143.67 1.98399 147.414 0.687991 153.558 0.687991C159.606 0.687991 163.254 1.98399 164.502 4.57599C165.27 6.016 165.702 7.312 165.798 8.46399C165.99 9.52 166.086 11.152 166.086 13.36V43.312C169.926 38.608 175.398 36.256 182.502 36.256ZM169.83 82.768C172.23 85.36 175.206 86.656 178.758 86.656C182.31 86.656 185.334 85.36 187.83 82.768C190.326 80.176 191.574 77.296 191.574 74.128C191.574 70.96 190.422 68.08 188.118 65.488C185.814 62.8 182.742 61.456 178.902 61.456C175.062 61.456 171.99 62.8 169.686 65.488C167.478 68.176 166.374 71.104 166.374 74.272C166.374 77.344 167.526 80.176 169.83 82.768ZM290.617 65.056C290.617 70.912 289.129 75.28 286.153 78.16C283.273 80.944 280.057 82.336 276.505 82.336H242.377C242.377 85.024 243.961 87.28 247.129 89.104C250.297 90.928 253.465 91.84 256.633 91.84C262.201 91.84 266.569 91.264 269.737 90.112L271.321 89.536C273.625 88.48 275.545 87.952 277.081 87.952C280.153 87.952 282.793 90.112 285.001 94.432C286.249 97.024 286.873 99.232 286.873 101.056C286.873 109.6 276.649 113.872 256.201 113.872C249.097 113.872 242.761 112.672 237.193 110.272C231.721 107.776 227.449 104.512 224.377 100.48C218.329 92.704 215.305 84.016 215.305 74.416C215.305 62.32 219.193 52.672 226.969 45.472C234.841 38.176 244.633 34.528 256.345 34.528C269.689 34.528 279.481 39.232 285.721 48.64C288.985 53.632 290.617 59.104 290.617 65.056ZM260.233 69.232C263.881 69.232 265.705 67.696 265.705 64.624C265.705 62.416 264.841 60.64 263.113 59.296C261.481 57.952 259.081 57.28 255.913 57.28C252.841 57.28 249.769 58.576 246.697 61.168C243.625 63.664 242.089 66.352 242.089 69.232H260.233ZM342.924 36.976C344.748 37.552 346.236 38.56 347.388 40C348.636 41.344 349.26 43.552 349.26 46.624C349.26 49.696 348.348 53.056 346.524 56.704C344.7 60.352 342.06 62.176 338.604 62.176C336.876 62.176 335.196 61.792 333.564 61.024C332.028 60.256 329.964 59.872 327.372 59.872C324.78 59.872 322.332 60.784 320.028 62.608C317.82 64.432 316.716 66.64 316.716 69.232V99.472C316.716 101.68 316.62 103.36 316.428 104.512C316.332 105.568 315.9 106.816 315.132 108.256C313.692 110.752 309.948 112 303.9 112C299.292 112 295.98 111.184 293.964 109.552C292.428 108.208 291.564 106.144 291.372 103.36C291.372 102.4 291.372 101.008 291.372 99.184V48.64C291.372 46.432 291.42 44.8 291.516 43.744C291.708 42.592 292.14 41.344 292.812 40C294.156 37.408 297.9 36.112 304.044 36.112C309.804 36.112 313.404 37.216 314.844 39.424C315.9 40.96 316.428 42.544 316.428 44.176C316.908 43.504 317.58 42.688 318.444 41.728C319.404 40.768 321.372 39.472 324.348 37.84C327.324 36.208 329.916 35.392 332.124 35.392C334.428 35.392 336.348 35.536 337.884 35.824C339.42 36.016 341.1 36.4 342.924 36.976ZM392.608 61.6L383.248 61.024V80.896C383.248 83.488 383.632 85.36 384.4 86.512C385.264 87.664 386.8 88.24 389.008 88.24C391.312 88.24 393.04 88.336 394.192 88.528C395.44 88.624 396.736 89.056 398.08 89.824C400.288 91.072 401.392 94.288 401.392 99.472C401.392 105.52 400.048 109.216 397.36 110.56C395.92 111.232 394.624 111.664 393.472 111.856C392.416 111.952 390.832 112 388.72 112C378.736 112 371.152 109.744 365.968 105.232C360.784 100.72 358.192 93.088 358.192 82.336V61.024C356.368 61.312 354.4 61.456 352.288 61.456C350.176 61.456 348.4 60.64 346.96 59.008C345.616 57.376 344.944 54.592 344.944 50.656C344.944 46.72 345.184 43.888 345.664 42.16C346.144 40.336 346.816 39.04 347.68 38.272C349.216 37.024 351.136 36.4 353.44 36.4L358.192 36.976V22.144C358.192 19.936 358.24 18.304 358.336 17.248C358.528 16.192 359.008 15.04 359.776 13.792C361.024 11.392 364.72 10.192 370.864 10.192C377.392 10.192 381.28 11.968 382.528 15.52C383.008 17.056 383.248 19.504 383.248 22.864V36.976C387.472 36.592 390.64 36.4 392.752 36.4C394.96 36.4 396.592 36.496 397.648 36.688C398.8 36.784 400.096 37.216 401.536 37.984C404.032 39.232 405.28 42.928 405.28 49.072C405.28 55.12 403.984 58.816 401.392 60.16C399.952 60.832 398.656 61.264 397.504 61.456C396.448 61.552 394.816 61.6 392.608 61.6Z'
                    fill='black'
                  />
                  <path
                    // eslint-disable-next-line max-len
                    d='M411.504 6.304H491.568C494.64 6.304 496.896 6.688 498.336 7.456C499.776 8.128 500.736 9.232 501.216 10.768C501.696 12.304 501.936 14.32 501.936 16.816C501.936 19.312 501.696 21.328 501.216 22.864C500.736 24.304 499.92 25.312 498.768 25.888C497.04 26.752 494.592 27.184 491.424 27.184H463.92V99.616C463.92 101.824 463.824 103.456 463.632 104.512C463.536 105.568 463.104 106.816 462.336 108.256C461.664 109.6 460.416 110.56 458.592 111.136C456.768 111.712 454.368 112 451.392 112C448.416 112 446.016 111.712 444.192 111.136C442.464 110.56 441.216 109.6 440.448 108.256C439.776 106.816 439.344 105.568 439.152 104.512C439.056 103.36 439.008 101.68 439.008 99.472V27.184H411.36C408.288 27.184 406.032 26.848 404.592 26.176C403.152 25.408 402.192 24.256 401.712 22.72C401.232 21.184 400.992 19.168 400.992 16.672C400.992 14.176 401.232 12.208 401.712 10.768C402.192 9.232 403.008 8.17599 404.16 7.6C405.888 6.736 408.336 6.304 411.504 6.304ZM520.576 24.88C518.848 25.36 516.496 25.6 513.52 25.6C510.544 25.6 508.192 25.312 506.464 24.736C504.736 24.16 503.488 23.2 502.72 21.856C502.048 20.416 501.616 19.168 501.424 18.112C501.328 16.96 501.28 15.28 501.28 13.072C501.28 10.864 501.328 9.232 501.424 8.176C501.616 7.11999 502.048 5.91999 502.72 4.57599C504.064 2.08 507.76 0.831998 513.808 0.831998C519.568 0.831998 523.168 2.08 524.608 4.57599C525.28 5.82399 525.664 6.97599 525.76 8.03199C525.952 9.08799 526.048 10.672 526.048 12.784V13.648C526.048 15.76 525.952 17.344 525.76 18.4C525.664 19.456 525.232 20.656 524.464 22C523.696 23.344 522.4 24.304 520.576 24.88ZM506.608 36.544C508.432 35.968 510.832 35.68 513.808 35.68C516.784 35.68 519.136 35.968 520.864 36.544C522.592 37.12 523.792 38.128 524.464 39.568C525.232 40.912 525.664 42.16 525.76 43.312C525.952 44.368 526.048 46 526.048 48.208V107.536C526.048 118.768 522.16 127.744 514.384 134.464C506.608 141.184 498.064 144.544 488.752 144.544C486.544 144.544 484.912 144.448 483.856 144.256C482.8 144.16 481.6 143.776 480.256 143.104C477.76 141.76 476.512 138.256 476.512 132.592C476.512 126.928 477.568 123.376 479.68 121.936C481.696 120.496 484.48 119.776 488.032 119.776C491.488 119.776 494.56 118.816 497.248 116.896C499.936 114.976 501.28 111.52 501.28 106.528V47.2C501.28 43.84 501.712 41.392 502.576 39.856C503.536 38.224 504.88 37.12 506.608 36.544ZM526.761 74.128C526.761 62.608 530.793 53.104 538.857 45.616C546.921 38.128 556.137 34.384 566.505 34.384C576.873 34.384 586.041 38.128 594.009 45.616C601.977 53.008 605.961 62.464 605.961 73.984C605.961 81.952 603.897 89.056 599.769 95.296C595.641 101.44 590.601 106 584.649 108.976C578.793 111.856 572.697 113.296 566.361 113.296C560.025 113.296 553.881 111.76 547.929 108.688C541.977 105.52 536.937 100.912 532.809 94.864C528.777 88.72 526.761 81.808 526.761 74.128ZM556.857 84.496C559.929 86.8 563.049 87.952 566.217 87.952C569.385 87.952 572.553 86.752 575.721 84.352C578.889 81.952 580.473 78.4 580.473 73.696C580.473 68.992 578.985 65.488 576.009 63.184C573.033 60.88 569.817 59.728 566.361 59.728C562.905 59.728 559.689 60.928 556.713 63.328C553.737 65.728 552.249 69.28 552.249 73.984C552.249 78.592 553.785 82.096 556.857 84.496ZM658.177 36.976C660.001 37.552 661.489 38.56 662.641 40C663.889 41.344 664.513 43.552 664.513 46.624C664.513 49.696 663.601 53.056 661.777 56.704C659.953 60.352 657.313 62.176 653.857 62.176C652.129 62.176 650.449 61.792 648.817 61.024C647.281 60.256 645.217 59.872 642.625 59.872C640.033 59.872 637.585 60.784 635.281 62.608C633.073 64.432 631.969 66.64 631.969 69.232V99.472C631.969 101.68 631.873 103.36 631.681 104.512C631.585 105.568 631.153 106.816 630.385 108.256C628.945 110.752 625.201 112 619.153 112C614.545 112 611.233 111.184 609.217 109.552C607.681 108.208 606.817 106.144 606.625 103.36C606.625 102.4 606.625 101.008 606.625 99.184V48.64C606.625 46.432 606.673 44.8 606.769 43.744C606.961 42.592 607.393 41.344 608.065 40C609.409 37.408 613.153 36.112 619.297 36.112C625.057 36.112 628.657 37.216 630.097 39.424C631.153 40.96 631.681 42.544 631.681 44.176C632.161 43.504 632.833 42.688 633.697 41.728C634.657 40.768 636.625 39.472 639.601 37.84C642.577 36.208 645.169 35.392 647.377 35.392C649.681 35.392 651.601 35.536 653.137 35.824C654.673 36.016 656.353 36.4 658.177 36.976ZM705.989 36.112C715.589 36.112 723.557 39.808 729.893 47.2C736.325 54.496 739.541 63.424 739.541 73.984V99.328C739.541 101.536 739.445 103.216 739.253 104.368C739.157 105.424 738.773 106.624 738.101 107.968C736.757 110.56 733.013 111.856 726.869 111.856C720.053 111.856 716.117 110.08 715.061 106.528C714.485 104.896 714.197 102.448 714.197 99.184V73.84C714.197 69.904 713.045 66.832 710.741 64.624C708.533 62.416 705.509 61.312 701.669 61.312C697.925 61.312 694.853 62.464 692.453 64.768C690.149 67.072 688.997 70.096 688.997 73.84V99.328C688.997 101.536 688.901 103.216 688.709 104.368C688.613 105.424 688.181 106.624 687.413 107.968C686.165 110.56 682.469 111.856 676.325 111.856C670.277 111.856 666.581 110.56 665.237 107.968C664.565 106.528 664.133 105.28 663.941 104.224C663.845 103.072 663.797 101.392 663.797 99.184V48.208C663.797 46.096 663.845 44.512 663.941 43.456C664.133 42.304 664.613 41.056 665.381 39.712C666.725 37.312 670.421 36.112 676.469 36.112C682.325 36.112 685.925 37.216 687.269 39.424C688.229 41.056 688.709 43.024 688.709 45.328C689.093 44.656 689.957 43.696 691.301 42.448C692.645 41.2 693.941 40.192 695.189 39.424C698.453 37.216 702.053 36.112 705.989 36.112ZM815.638 65.056C815.638 70.912 814.15 75.28 811.174 78.16C808.294 80.944 805.078 82.336 801.526 82.336H767.398C767.398 85.024 768.982 87.28 772.15 89.104C775.318 90.928 778.486 91.84 781.654 91.84C787.222 91.84 791.59 91.264 794.758 90.112L796.342 89.536C798.646 88.48 800.566 87.952 802.102 87.952C805.174 87.952 807.814 90.112 810.022 94.432C811.27 97.024 811.894 99.232 811.894 101.056C811.894 109.6 801.67 113.872 781.222 113.872C774.118 113.872 767.782 112.672 762.214 110.272C756.742 107.776 752.47 104.512 749.398 100.48C743.35 92.704 740.326 84.016 740.326 74.416C740.326 62.32 744.214 52.672 751.99 45.472C759.862 38.176 769.654 34.528 781.366 34.528C794.71 34.528 804.502 39.232 810.742 48.64C814.006 53.632 815.638 59.104 815.638 65.056ZM785.254 69.232C788.902 69.232 790.726 67.696 790.726 64.624C790.726 62.416 789.862 60.64 788.134 59.296C786.502 57.952 784.102 57.28 780.934 57.28C777.862 57.28 774.79 58.576 771.718 61.168C768.646 63.664 767.11 66.352 767.11 69.232H785.254ZM858.441 36.4C868.041 36.4 876.009 40.048 882.345 47.344C888.777 54.64 891.993 63.568 891.993 74.128V99.472C891.993 101.68 891.897 103.36 891.705 104.512C891.609 105.568 891.177 106.816 890.409 108.256C889.161 110.752 885.465 112 879.321 112C873.465 112 869.817 110.752 868.377 108.256C867.609 106.816 867.129 105.52 866.937 104.368C866.841 103.216 866.793 101.488 866.793 99.184V73.984C866.793 70.048 865.689 66.976 863.481 64.768C861.273 62.56 858.441 61.456 854.985 61.456C851.625 61.456 848.649 62.512 846.057 64.624C843.465 66.64 841.977 68.944 841.593 71.536V99.472C841.593 101.68 841.497 103.36 841.305 104.512C841.209 105.568 840.777 106.816 840.009 108.256C838.761 110.752 835.065 112 828.921 112C822.873 112 819.177 110.704 817.833 108.112C817.161 106.672 816.729 105.424 816.537 104.368C816.441 103.312 816.393 101.632 816.393 99.328V13.216C816.393 11.008 816.441 9.37599 816.537 8.32C816.729 7.16799 817.161 5.91999 817.833 4.57599C819.177 1.98399 822.921 0.687991 829.065 0.687991C835.113 0.687991 838.761 1.98399 840.009 4.57599C840.777 6.016 841.209 7.312 841.305 8.46399C841.497 9.52 841.593 11.152 841.593 13.36V45.184C846.393 39.328 852.009 36.4 858.441 36.4ZM892.78 74.128C892.78 62.608 896.812 53.104 904.876 45.616C912.94 38.128 922.156 34.384 932.524 34.384C942.892 34.384 952.06 38.128 960.028 45.616C967.996 53.008 971.98 62.464 971.98 73.984C971.98 81.952 969.916 89.056 965.788 95.296C961.66 101.44 956.62 106 950.668 108.976C944.812 111.856 938.716 113.296 932.38 113.296C926.044 113.296 919.9 111.76 913.948 108.688C907.996 105.52 902.956 100.912 898.828 94.864C894.796 88.72 892.78 81.808 892.78 74.128ZM922.876 84.496C925.948 86.8 929.068 87.952 932.236 87.952C935.404 87.952 938.572 86.752 941.74 84.352C944.908 81.952 946.492 78.4 946.492 73.696C946.492 68.992 945.004 65.488 942.028 63.184C939.052 60.88 935.836 59.728 932.38 59.728C928.924 59.728 925.708 60.928 922.732 63.328C919.756 65.728 918.268 69.28 918.268 73.984C918.268 78.592 919.804 82.096 922.876 84.496ZM991.94 24.88C990.212 25.36 987.86 25.6 984.884 25.6C981.908 25.6 979.556 25.312 977.828 24.736C976.1 24.16 974.852 23.2 974.084 21.856C973.412 20.416 972.98 19.168 972.788 18.112C972.692 16.96 972.644 15.28 972.644 13.072C972.644 10.864 972.692 9.232 972.788 8.176C972.98 7.11999 973.412 5.91999 974.084 4.57599C975.428 2.08 979.124 0.831998 985.172 0.831998C990.932 0.831998 994.532 2.08 995.972 4.57599C996.644 5.82399 997.028 6.97599 997.124 8.03199C997.316 9.08799 997.412 10.672 997.412 12.784V13.648C997.412 15.76 997.316 17.344 997.124 18.4C997.028 19.456 996.596 20.656 995.828 22C995.06 23.344 993.764 24.304 991.94 24.88ZM977.972 36.544C979.796 35.968 982.196 35.68 985.172 35.68C988.148 35.68 990.5 35.968 992.228 36.544C993.956 37.12 995.156 38.128 995.828 39.568C996.596 40.912 997.028 42.16 997.124 43.312C997.316 44.368 997.412 46 997.412 48.208V107.536C997.412 118.768 993.524 127.744 985.748 134.464C977.972 141.184 969.428 144.544 960.116 144.544C957.908 144.544 956.276 144.448 955.22 144.256C954.164 144.16 952.964 143.776 951.62 143.104C949.124 141.76 947.876 138.256 947.876 132.592C947.876 126.928 948.932 123.376 951.044 121.936C953.06 120.496 955.844 119.776 959.396 119.776C962.852 119.776 965.924 118.816 968.612 116.896C971.3 114.976 972.644 111.52 972.644 106.528V47.2C972.644 43.84 973.076 41.392 973.94 39.856C974.9 38.224 976.244 37.12 977.972 36.544Z'
                    fill='#2F80ED'
                  />
                </svg>
              </Link>
            </Col>
            <Col xs={0} sm={16} md={12} lg={16} xl={18}>
              <Menu mode='horizontal'>
                {user ? signInMenu : signOutMenu}
                {globalMenu}
              </Menu>
            </Col>
          </Row>
        </div>
      </Affix>
    </header>
  );
}
