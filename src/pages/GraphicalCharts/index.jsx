import React from "react";

import { Img, Input, Text, Line, List, Button } from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const GraphicalChartsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_52 flex font-gilroy items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div className="bg-white_A700 flex items-center justify-start p-[22px] sm:px-[20px] w-[100%]">
            <div className="flex items-center justify-start max-w-[1286px] mx-[auto] md:px-[20px] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                <Img
                  src="images/img_group_5.svg"
                  className="h-[35px] w-[13%]"
                  alt="Group"
                />
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="flex-1 font-medium p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                  wrapClassName="flex gap-[12px] md:ml-[0] md:mt-[0] md:w-[100%] ml-[101px] my-[6px] sm:ml-[0] sm:mt-[0] sm:w-[100%] w-[406px]"
                  name="InputField"
                  placeholder="Search"
                  prefix={
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer my-[auto] mx-[12px]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#bac1ce"
                        className="cursor-pointer ml-[10px] mr-[22px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                ></Input>
                <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex font-opensans h-[56px] items-end justify-start md:ml-[0] ml-[480px] p-[8px] rounded-[50%] w-[56px]">
                  <div className="h-[35px] md:h-[36px] mb-[4px] relative w-[36px]">
                    <Img
                      src="images/img_notification.svg"
                      className="absolute bottom-[0] h-[32px] left-[0] w-[32px]"
                      alt="notification"
                    />
                    <Text
                      className="absolute bg-red_700 border-[1px] border-bluegray_50 border-solid font-semibold h-[18px] pb-[5px] pt-[2px] px-[5px] right-[0] rounded-[50%] text-left text-white_A700 top-[0] w-[18px]"
                      variant="body3"
                    >
                      2
                    </Text>
                  </div>
                </div>
                <div className="border-[1px] border-blue_A701 border-solid flex h-[56px] items-center justify-start md:ml-[0] ml-[24px] p-[4px] rounded-[50%] w-[56px]">
                  <Img
                    src="images/img_profileimglarg_85X85.png"
                    className="h-[48px] md:h-[auto] rounded-[50%] w-[48px]"
                    alt="ProfileImgLarg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[32px] items-center justify-between max-w-[1408px] mx-[auto] md:px-[20px] w-[100%]">
            <aside className="flex flex-col md:hidden justify-start w-[300px]">
              <div className="bg-white_A700 flex flex-col gap-[375px] md:gap-[40px] items-center justify-end p-[5px] w-[100%]">
                <div className="flex flex-col gap-[8px] items-center justify-start mt-[19px] md:w-[100%] w-[87%]">
                  <div className="flex items-start justify-start p-[8px] w-[100%]">
                    <div className="flex flex-row gap-[8px] items-start justify-start my-[8px] md:w-[100%] w-[40%]">
                      <Img
                        src="images/img_settings.svg"
                        className="h-[24px] w-[24px]"
                        alt="settings"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-bluegray_700 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Settings
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start p-[8px] rounded-[8px] w-[100%]">
                    <div className="flex flex-row gap-[8px] items-start justify-start my-[9px] md:w-[100%] w-[49%]">
                      <Img
                        src="images/img_save.svg"
                        className="h-[24px] w-[24px]"
                        alt="save"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-bluegray_700 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start p-[8px] w-[100%]">
                    <div className="flex flex-row gap-[8px] items-end justify-start my-[8px] md:w-[100%] w-[45%]">
                      <Img
                        src="images/img_dollaraltsoli.svg"
                        className="h-[24px] w-[24px]"
                        alt="dollaraltSoli"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-bluegray_700 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Payments
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start p-[8px] w-[100%]">
                    <div className="flex flex-row gap-[8px] items-start justify-start my-[9px] md:w-[100%] w-[61%]">
                      <Img
                        src="images/img_walletoutline.svg"
                        className="h-[24px] w-[24px]"
                        alt="walletOutline"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-bluegray_700 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Wallet & Cards
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[6px] items-center justify-start pr-[17px] py-[17px] w-[100%]">
                    <Line className="bg-blue_A700 h-[24px] w-[2px]" />
                    <div className="flex flex-row gap-[8px] items-start justify-start w-[54%]">
                      <Img
                        src="images/img_userarrowsout.svg"
                        className="h-[24px] w-[24px]"
                        alt="userarrowsOut"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_A700 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Transactions
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start p-[8px] w-[100%]">
                    <div className="flex flex-row gap-[8px] items-start justify-start my-[8px] md:w-[100%] w-[43%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[24px] w-[24px]"
                        alt="checkmark"
                      />
                      <Text
                        className="font-semibold mt-[4px] text-bluegray_700 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Analytics
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start p-[8px] w-[100%]">
                    <div className="flex flex-row gap-[8px] items-end justify-start my-[8px] md:w-[100%] w-[45%]">
                      <Img
                        src="images/img_menu.svg"
                        className="h-[24px] w-[24px]"
                        alt="menu"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-bluegray_700 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Messages
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start p-[8px] w-[100%]">
                    <div className="flex flex-row gap-[8px] items-start justify-start my-[8px] md:w-[100%] w-[40%]">
                      <Img
                        src="images/img_settings.svg"
                        className="h-[24px] w-[24px]"
                        alt="settings Two"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-bluegray_700 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Settings
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex font-opensans items-start justify-start p-[8px] md:w-[100%] w-[87%]">
                  <div className="flex flex-row gap-[8px] items-end justify-start my-[8px] md:w-[100%] w-[29%]">
                    <Img
                      src="images/img_question.svg"
                      className="h-[24px] w-[24px]"
                      alt="question"
                    />
                    <Text
                      className="font-semibold mt-[5px] text-bluegray_700 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Help
                    </Text>
                  </div>
                </div>
              </div>
            </aside>
            <div className="flex flex-1 flex-col gap-[35px] items-start justify-start pt-[5px] w-[100%]">
              <div className="flex flex-col gap-[37px] items-start justify-start md:w-[100%] w-[90%]">
                <Text
                  className="font-semibold text-gray_901 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Transactions
                </Text>
                <div className="flex md:flex-col flex-row gap-[24px] items-center justify-between w-[100%]">
                  <div className="bg-white_A700 flex md:flex-1 items-center justify-start mb-[3px] p-[24px] sm:px-[20px] rounded-[6px] md:w-[100%] w-[36%]">
                    <div className="flex flex-row gap-[13px] items-center justify-start w-[100%]">
                      <div className="flex flex-col gap-[24px] items-start justify-start pr-[4px] py-[4px] w-[auto]">
                        <Text
                          className="font-medium text-blue_A700 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Total Balance
                        </Text>
                        <Text
                          className="font-bold mb-[6px] text-blue_A700 text-left w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          $40,241
                        </Text>
                      </div>
                      <CircularProgressbar
                        className="h-[70px] my-[11px] overflow-visible w-[70px]"
                        value={29}
                        counterClockwise
                        strokeWidth={24}
                        styles={{
                          trail: { strokeWidth: 24, stroke: "#0061ff" },
                          path: {
                            strokeLinecap: "square",
                            height: "100%",
                            transformOrigin: "center",
                            transform: "rotate(19deg)",
                            stroke: "#e0ebff",
                          },
                        }}
                      ></CircularProgressbar>
                    </div>
                  </div>
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 grid-cols-3 md:w-[100%] w-[62%]"
                    orientation="horizontal"
                  >
                    <div className="bg-white_A700 flex flex-col gap-[10px] items-start justify-start sm:ml-[0] p-[16px] rounded-[6px] shadow-bs1 w-[100%]">
                      <div className="flex flex-row gap-[8px] items-start justify-start pr-[3px] py-[3px] w-[100%]">
                        <Img
                          src="images/img_close.svg"
                          className="h-[20px] w-[20px]"
                          alt="close"
                        />
                        <Text
                          className="font-medium text-bluegray_900 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Bitcoin
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-start md:w-[100%] w-[94%]">
                        <Text
                          className="text-bluegray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          15.47 BTC
                        </Text>
                        <div className="flex flex-row items-center justify-center pr-[2px] py-[2px] w-[39%]">
                          <Img
                            src="images/img_arrowdown_16X16.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowdown"
                          />
                          <Text
                            className="font-normal mr-[13px] not-italic text-left text-red_700 w-[auto]"
                            variant="body3"
                          >
                            6.70
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_chartsmicro.svg"
                        className="h-[45px] w-[100%]"
                        alt="Chartsmicro"
                      />
                    </div>
                    <div className="bg-white_A700 flex flex-col gap-[10px] items-center justify-start sm:ml-[0] p-[16px] rounded-[6px] shadow-bs1 w-[100%]">
                      <div className="flex flex-row gap-[8px] items-center justify-start pr-[3px] py-[3px] w-[100%]">
                        <Button
                          className="flex h-[20px] items-center justify-center rounded-[50%] w-[20px]"
                          size="smIcn"
                          variant="icbFillBlack900"
                        >
                          <Img
                            src="images/img_mail.svg"
                            className=""
                            alt="mail"
                          />
                        </Button>
                        <Text
                          className="font-medium text-bluegray_900 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Ethereoum
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-start md:w-[100%] w-[96%]">
                        <Text
                          className="text-bluegray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          34.47 ETH
                        </Text>
                        <div className="flex flex-row items-center justify-center pr-[2px] py-[2px] w-[38%]">
                          <Img
                            src="images/img_arrowup.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowup"
                          />
                          <Text
                            className="font-normal mr-[14px] not-italic text-green_600 text-left w-[auto]"
                            variant="body3"
                          >
                            5.67
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_chartsmicro_blue_50.svg"
                        className="h-[45px] w-[100%]"
                        alt="Chartsmicro One"
                      />
                    </div>
                    <div className="bg-white_A700 flex flex-col gap-[10px] items-center justify-start sm:ml-[0] p-[16px] rounded-[6px] shadow-bs1 w-[100%]">
                      <div className="flex flex-row gap-[8px] items-center justify-start pr-[3px] py-[3px] w-[100%]">
                        <Button
                          className="flex h-[20px] items-center justify-center rounded-[50%] w-[20px]"
                          size="smIcn"
                          variant="icbFillBlack900"
                        >
                          <Img
                            src="images/img_mail.svg"
                            className=""
                            alt="mail One"
                          />
                        </Button>
                        <Text
                          className="font-medium text-bluegray_900 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Ethereoum
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-start md:w-[100%] w-[96%]">
                        <Text
                          className="text-bluegray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          34.47 ETH
                        </Text>
                        <div className="flex flex-row items-center justify-center pr-[2px] py-[2px] w-[38%]">
                          <Img
                            src="images/img_arrowup.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowup One"
                          />
                          <Text
                            className="font-normal mr-[14px] not-italic text-green_600 text-left w-[auto]"
                            variant="body3"
                          >
                            5.67
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_chartsmicro_blue_50.svg"
                        className="h-[45px] w-[100%]"
                        alt="Chartsmicro Two"
                      />
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex flex-col gap-[37px] items-start justify-start w-[100%]">
                <Text
                  className="font-semibold text-gray_901 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Recent Transaction
                </Text>
                <List
                  className="flex-col gap-[16px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row md:gap-[40px] items-start justify-between w-[100%]">
                    <div className="flex flex-col gap-[9px] items-start justify-start pt-[3px] w-[auto]">
                      <div className="flex flex-row gap-[16px] items-start justify-start md:w-[100%] w-[88%]">
                        <Img
                          src="images/img_refresh.svg"
                          className="h-[24px] mb-[2px] w-[24px]"
                          alt="refresh"
                        />
                        <Text
                          className="font-semibold mt-[4px] text-black_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Sync
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        May, 16 2022
                      </Text>
                    </div>
                    <Text
                      className="font-bold mt-[5px] text-blue_A700 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      $2000
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row md:gap-[40px] items-start justify-between w-[100%]">
                    <div className="flex flex-col gap-[9px] items-start justify-start pt-[3px] w-[auto]">
                      <div className="flex flex-row gap-[16px] items-start justify-start md:w-[100%] w-[88%]">
                        <Img
                          src="images/img_refresh.svg"
                          className="h-[24px] mb-[2px] w-[24px]"
                          alt="refresh One"
                        />
                        <Text
                          className="font-semibold mt-[4px] text-black_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Sync
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        May, 16 2022
                      </Text>
                    </div>
                    <Text
                      className="font-bold mt-[5px] text-blue_A700 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      $2000
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row md:gap-[40px] items-start justify-between w-[100%]">
                    <div className="flex flex-col gap-[9px] items-start justify-start pt-[3px] w-[auto]">
                      <div className="flex flex-row gap-[16px] items-start justify-start md:w-[100%] w-[88%]">
                        <Img
                          src="images/img_refresh.svg"
                          className="h-[24px] mb-[2px] w-[24px]"
                          alt="refresh Two"
                        />
                        <Text
                          className="font-semibold mt-[4px] text-black_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Sync
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        May, 16 2022
                      </Text>
                    </div>
                    <Text
                      className="font-bold mt-[5px] text-blue_A700 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      $2000
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row md:gap-[40px] items-start justify-between w-[100%]">
                    <div className="flex flex-col gap-[9px] items-start justify-start pt-[3px] w-[auto]">
                      <div className="flex flex-row gap-[16px] items-start justify-start md:w-[100%] w-[88%]">
                        <Img
                          src="images/img_refresh.svg"
                          className="h-[24px] mb-[2px] w-[24px]"
                          alt="refresh Three"
                        />
                        <Text
                          className="font-semibold mt-[4px] text-black_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Sync
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        May, 16 2022
                      </Text>
                    </div>
                    <Text
                      className="font-bold mt-[5px] text-blue_A700 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      $2000
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row md:gap-[40px] items-start justify-between w-[100%]">
                    <div className="flex flex-col gap-[9px] items-start justify-start pt-[3px] w-[auto]">
                      <div className="flex flex-row gap-[16px] items-start justify-start md:w-[100%] w-[88%]">
                        <Img
                          src="images/img_refresh.svg"
                          className="h-[24px] mb-[2px] w-[24px]"
                          alt="refresh Four"
                        />
                        <Text
                          className="font-semibold mt-[4px] text-black_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Sync
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        May, 16 2022
                      </Text>
                    </div>
                    <Text
                      className="font-bold mt-[5px] text-blue_A700 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      $2000
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row md:gap-[40px] items-start justify-between w-[100%]">
                    <div className="flex flex-col gap-[9px] items-start justify-start pt-[3px] w-[auto]">
                      <div className="flex flex-row gap-[16px] items-start justify-start md:w-[100%] w-[88%]">
                        <Img
                          src="images/img_refresh.svg"
                          className="h-[24px] mb-[2px] w-[24px]"
                          alt="refresh Five"
                        />
                        <Text
                          className="font-semibold mt-[4px] text-black_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Sync
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        May, 16 2022
                      </Text>
                    </div>
                    <Text
                      className="font-bold mt-[5px] text-blue_A700 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      $2000
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row md:gap-[40px] items-start justify-between w-[100%]">
                    <div className="flex flex-col gap-[9px] items-start justify-start pt-[3px] w-[auto]">
                      <div className="flex flex-row gap-[16px] items-start justify-start md:w-[100%] w-[88%]">
                        <Img
                          src="images/img_refresh.svg"
                          className="h-[24px] mb-[2px] w-[24px]"
                          alt="refresh Six"
                        />
                        <Text
                          className="font-semibold mt-[4px] text-black_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Sync
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        May, 16 2022
                      </Text>
                    </div>
                    <Text
                      className="font-bold mt-[5px] text-blue_A700 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      $2000
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row md:gap-[40px] items-start justify-between w-[100%]">
                    <div className="flex flex-col gap-[9px] items-start justify-start pt-[3px] w-[auto]">
                      <div className="flex flex-row gap-[16px] items-start justify-start md:w-[100%] w-[88%]">
                        <Img
                          src="images/img_refresh.svg"
                          className="h-[24px] mb-[2px] w-[24px]"
                          alt="refresh Seven"
                        />
                        <Text
                          className="font-semibold mt-[4px] text-black_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Sync
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        May, 16 2022
                      </Text>
                    </div>
                    <Text
                      className="font-bold mt-[5px] text-blue_A700 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      $2000
                    </Text>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphicalChartsPage;
