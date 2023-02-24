import React from "react";

import { Img, Text, Line, Input, List } from "components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AdhocReportingPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex sm:flex-col md:flex-col flex-row font-gilroy gap-[30px] items-start mx-[auto] w-[100%]">
        <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[300px]">
          <div className="bg-gray_51 flex flex-col gap-[35px] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
            <Img
              src="images/img_group.svg"
              className="h-[35px] mt-[3px] w-[65%]"
              alt="Group"
            />
            <div className="flex flex-col md:gap-[40px] gap-[441px] items-center justify-start mb-[8px] w-[100%]">
              <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
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
                <div className="flex items-start justify-start p-[8px] w-[100%]">
                  <div className="flex flex-row gap-[8px] items-start justify-start my-[9px] md:w-[100%] w-[54%]">
                    <Img
                      src="images/img_car.svg"
                      className="h-[24px] w-[24px]"
                      alt="car"
                    />
                    <Text
                      className="font-semibold mt-[3px] text-bluegray_700 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Transactions
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[6px] items-center justify-start pr-[16px] py-[16px] w-[100%]">
                  <Line className="bg-blue_A700 h-[24px] w-[2px]" />
                  <div className="flex flex-row gap-[8px] items-start justify-start w-[36%]">
                    <Img
                      src="images/img_analyticssolid.svg"
                      className="h-[24px] w-[24px]"
                      alt="analyticsSolid"
                    />
                    <Text
                      className="font-semibold mt-[5px] text-blue_A700 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Report
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
              </div>
              <div className="flex font-opensans items-start justify-start p-[8px] w-[100%]">
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
          </div>
        </aside>
        <div className="flex-1 sm:h-[1056px] md:h-[1106px] h-[1109px] md:mt-[0] mt-[24px] md:px-[20px] relative w-[100%]">
          <div className="absolute flex flex-col gap-[24px] inset-x-[0] items-center justify-start mx-[auto] top-[1%] w-[100%]">
            <div className="flex flex-row md:gap-[40px] items-end justify-between w-[100%]">
              <Text
                className="font-semibold mb-[5px] mt-[17px] text-bluegray_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Ad hoc Report
              </Text>
              <div className="flex flex-row font-opensans gap-[24px] items-center justify-between w-[12%]">
                <div className="flex flex-row gap-[24px] h-[56px] items-center justify-between overflow-auto w-[56px]">
                  <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex h-[56px] items-end justify-start p-[8px] rounded-[50%] w-[56px]">
                    <div className="h-[35px] md:h-[36px] mb-[4px] relative w-[36px]">
                      <Img
                        src="images/img_notification.svg"
                        className="absolute bottom-[0] h-[32px] left-[0] w-[32px]"
                        alt="notification"
                      />
                      <div className="absolute bg-red_700 border-[1px] border-bluegray_50 border-solid flex h-[18px] items-start justify-start p-[2px] right-[0] rounded-[50%] top-[0] w-[18px]">
                        <Text
                          className="font-semibold mb-[2px] md:ml-[0] ml-[2px] text-left text-white_A700 w-[auto]"
                          variant="body3"
                        >
                          2
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_ellipse13.png"
                    className="h-[56px] md:h-[auto] object-cover w-[56px]"
                    alt="EllipseThirteen"
                  />
                </div>
                <div className="md:h-[48px] h-[56px] pl-[4px] py-[4px] relative w-[37%]">
                  <Img
                    src="images/img_profileimglarg.png"
                    className="absolute h-[48px] inset-y-[0] my-[auto] object-cover right-[0] rounded-[24px] w-[92%]"
                    alt="ProfileImgLarg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[30px] items-start justify-start md:w-[100%] w-[98%]">
              <div className="flex md:flex-col flex-row md:gap-[40px] gap-[79px] items-start justify-start md:ml-[0] ml-[2px] md:w-[100%] w-[81%]">
                <div className="h-[50px] md:h-[52px] relative md:w-[100%] w-[46%]">
                  <div className="absolute bg-gray_51 border-[1px] border-bluegray_100 border-solid flex flex-row gap-[36px] h-[100%] inset-[0] items-start justify-center m-[auto] pb-[4px] pr-[4px] w-[100%]">
                    <div className="flex items-start justify-center w-[auto]">
                      <Text
                        className="font-medium text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Daily
                      </Text>
                    </div>
                    <div className="flex items-start justify-center w-[auto]">
                      <Text
                        className="font-medium text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Weekly
                      </Text>
                    </div>
                    <div className="flex items-start justify-center w-[auto]">
                      <Text
                        className="font-medium text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Monthly
                      </Text>
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-[4px] h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[auto]">
                    <div className="flex items-center justify-start p-[10px] w-[100%]">
                      <Text
                        className="font-medium text-blue_A700 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Custom
                      </Text>
                    </div>
                    <Line className="bg-blue_A700 h-[2px] w-[100%]" />
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-between pt-[4px] md:w-[100%] w-[46%]">
                  <div className="flex flex-col gap-[9px] items-start justify-start sm:w-[100%] w-[48%]">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Start Date
                    </Text>
                    <Input
                      className="font-medium p-[0] text-[16px] placeholder:text-bluegray_900 text-bluegray_900 text-left w-[100%]"
                      wrapClassName="flex w-[100%]"
                      name="Frame9951"
                      placeholder="08/21/2022"
                      suffix={
                        <Img
                          src="images/img_calendar.svg"
                          className="ml-[35px] mr-[12px] my-[auto]"
                          alt="calendar"
                        />
                      }
                      shape="RoundedBorder6"
                      size="sm"
                      variant="OutlineBluegray100"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-[9px] items-start justify-start sm:w-[100%] w-[48%]">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      End Date
                    </Text>
                    <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex flex-row items-center justify-between p-[12px] rounded-[6px] w-[100%]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        08/27/2022
                      </Text>
                      <Img
                        src="images/img_calendar.svg"
                        className="h-[20px] w-[20px]"
                        alt="calendar One"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                  <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start md:w-[100%] w-[73%]">
                    <div className="flex flex-col gap-[24px] items-center justify-start md:w-[100%] w-[51%]">
                      <div
                        className="bg-cover bg-no-repeat flex h-[255px] items-center justify-start p-[16px] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group9824.svg')",
                        }}
                      >
                        <div className="flex flex-col items-center justify-start md:w-[100%] w-[37%]">
                          <div className="h-[134px] relative rounded-[20px] w-[134px]">
                            <CircularProgressbar
                              className="h-[134px] m-[auto] overflow-visible w-[134px]"
                              value={79}
                              counterClockwise
                              strokeWidth={10}
                              styles={{
                                trail: { strokeWidth: 10, stroke: "#99e4e4e4" },
                                path: {
                                  strokeLinecap: "square",
                                  height: "100%",
                                  transformOrigin: "center",
                                  transform: "rotate(0deg)",
                                  stroke: "#0061ff",
                                },
                              }}
                            ></CircularProgressbar>
                            <Text
                              className="absolute font-semibold h-[max-content] inset-[0] justify-center m-[auto] text-bluegray_900 text-left w-[max-content]"
                              as="h1"
                              variant="h1"
                            >
                              80%
                            </Text>
                          </div>
                          <Text
                            className="mt-[23px] text-blue_A700 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Overall
                          </Text>
                          <Text
                            className="font-normal mt-[21px] not-italic text-bluegray_400 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Actively liberal
                          </Text>
                        </div>
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-[16px] grid grid-cols-3 justify-center w-[100%]"
                        orientation="horizontal"
                      >
                        <div
                          className="bg-cover bg-no-repeat flex flex-1 h-[135px] items-center justify-end p-[9px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_graphpie.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-[20px] items-center justify-start mt-[3px] md:w-[100%] w-[91%]">
                            <div className="h-[78px] relative rounded-[10px] w-[78px]">
                              <CircularProgressbar
                                className="h-[78px] m-[auto] overflow-visible w-[78px]"
                                value={89}
                                counterClockwise
                                strokeWidth={9}
                                styles={{
                                  trail: {
                                    strokeWidth: 9,
                                    stroke: "#99e4e4e4",
                                  },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(0deg)",
                                    stroke: "#0061ff",
                                  },
                                }}
                              ></CircularProgressbar>
                              <Text
                                className="absolute font-semibold h-[max-content] inset-[0] justify-center m-[auto] text-gray_900 text-left w-[max-content]"
                                as="h6"
                                variant="h6"
                              >
                                90%
                              </Text>
                            </div>
                            <Text
                              className="font-medium text-bluegray_400 text-left w-[auto]"
                              variant="body3"
                            >
                              Passively Income
                            </Text>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-1 h-[135px] items-start justify-start p-[10px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_graphpie.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-[20px] items-end justify-start my-[2px] md:w-[100%] w-[95%]">
                            <div className="h-[78px] relative rounded-[10px] w-[78px]">
                              <CircularProgressbar
                                className="h-[78px] m-[auto] overflow-visible w-[78px]"
                                value={74}
                                counterClockwise
                                strokeWidth={9}
                                styles={{
                                  trail: {
                                    strokeWidth: 9,
                                    stroke: "#99e4e4e4",
                                  },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(0deg)",
                                    stroke: "#0061ff",
                                  },
                                }}
                              ></CircularProgressbar>
                              <Text
                                className="absolute font-semibold h-[max-content] inset-[0] justify-center m-[auto] text-gray_900 text-left w-[max-content]"
                                as="h6"
                                variant="h6"
                              >
                                75%
                              </Text>
                            </div>
                            <Text
                              className="font-medium text-bluegray_400 text-left w-[auto]"
                              variant="body3"
                            >
                              Passively Savings
                            </Text>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-1 h-[135px] items-center justify-end p-[9px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_graphpie.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-[20px] items-center justify-start mt-[3px] md:w-[100%] w-[97%]">
                            <div className="h-[78px] relative rounded-[10px] w-[78px]">
                              <CircularProgressbar
                                className="h-[78px] m-[auto] overflow-visible w-[78px]"
                                value={49}
                                counterClockwise
                                strokeWidth={9}
                                styles={{
                                  trail: {
                                    strokeWidth: 9,
                                    stroke: "#99e4e4e4",
                                  },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(0deg)",
                                    stroke: "#0061ff",
                                  },
                                }}
                              ></CircularProgressbar>
                              <Text
                                className="absolute font-semibold h-[max-content] inset-[0] justify-center m-[auto] text-gray_900 text-left w-[max-content]"
                                as="h6"
                                variant="h6"
                              >
                                50%
                              </Text>
                            </div>
                            <Text
                              className="font-medium text-bluegray_400 text-left w-[auto]"
                              variant="body3"
                            >
                              Passively Expense
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                    <div className="bg-white_A700 flex items-start justify-start mb-[6px] md:mt-[0] mt-[44px] p-[16px] rounded-[6px] md:w-[100%] w-[46%]">
                      <div className="flex flex-col md:gap-[40px] gap-[63px] justify-start mb-[49px] mt-[11px] md:w-[100%] w-[86%]">
                        <div className="flex flex-col items-start justify-end pt-[7px] md:w-[100%] w-[69%]">
                          <div className="flex flex-col items-start justify-start md:w-[100%] w-[86%]">
                            <Text
                              className="font-semibold text-bluegray_901 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Total Working Days
                            </Text>
                            <div className="flex flex-row gap-[16px] items-center justify-start pr-[8px] py-[8px] md:w-[100%] w-[67%]">
                              <Text
                                className="font-bold text-bluegray_900 text-left w-[auto]"
                                as="h2"
                                variant="h2"
                              >
                                225
                              </Text>
                              <Text
                                className="font-medium text-bluegray_900 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Days
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[7px] items-start justify-start mt-[4px] w-[100%]">
                            <Text
                              className="font-medium font-montserrat text-left text-red_A200 w-[auto]"
                              variant="body2"
                            >
                              48%
                            </Text>
                            <Text
                              className="font-gilroy font-medium text-gray_400 text-left w-[auto]"
                              variant="body2"
                            >
                              {" "}
                              Higher than colleagues
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-end justify-end ml-[auto] md:w-[100%] w-[83%]">
                          <div className="bg-blue_A700_7e h-[98px] mt-[14px] rounded-[4px] w-[14%]"></div>
                          <div className="bg-blue_A700_7e h-[84px] ml-[8px] mt-[28px] rounded-[4px] w-[14%]"></div>
                          <div className="bg-blue_A700_7e h-[103px] ml-[8px] mt-[8px] rounded-[4px] w-[14%]"></div>
                          <div className="bg-blue_A700_7e h-[70px] ml-[8px] mt-[42px] rounded-[4px] w-[14%]"></div>
                          <div className="bg-blue_A700_7e h-[98px] ml-[8px] mt-[14px] rounded-[4px] w-[14%]"></div>
                          <div className="bg-blue_A700 h-[112px] ml-[8px] rounded-[4px] w-[14%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[24px] items-center justify-between w-[100%]">
                    <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex md:flex-1 items-center justify-end p-[21px] sm:px-[20px] rounded-[6px] md:w-[100%] w-[64%]">
                      <div className="flex flex-col gap-[21px] items-center justify-start mt-[3px] w-[100%]">
                        <div className="flex flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                          <div className="flex flex-col gap-[7px] items-start justify-start mt-[7px] w-[32%]">
                            <Text
                              className="font-semibold text-bluegray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Spend Analysis
                            </Text>
                            <div className="flex flex-row items-start justify-evenly w-[100%]">
                              <Img
                                src="images/img_arrowgrowthou.svg"
                                className="h-[16px] mb-[3px] w-[16px]"
                                alt="arrowgrowthOu"
                              />
                              <Text
                                className="font-normal mt-[2px] not-italic text-black_900 text-left w-[auto]"
                                variant="body2"
                              >
                                <span className="text-colors text-[14px] font-gilroy">
                                  88%
                                </span>
                                <span className="text-colors1 text-[14px] font-gilroy">
                                  {" "}
                                  Compared to last week
                                </span>
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[13px] items-center justify-between w-[17%]">
                            <Text
                              className="font-semibold ml-[3px] text-bluegray_600 text-left w-[auto]"
                              variant="body2"
                            >
                              This Week
                            </Text>
                            <Img
                              src="images/img_arrowdown.svg"
                              className="h-[20px] w-[20px]"
                              alt="arrowdown"
                            />
                          </div>
                        </div>
                        <div className="flex items-center justify-end py-[3px] w-[100%]">
                          <div className="flex flex-col gap-[18px] items-end justify-start w-[100%]">
                            <div className="flex md:flex-col flex-row gap-[7px] items-center justify-between w-[100%]">
                              <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  25k
                                </Text>
                                <Text
                                  className="font-normal mt-[26px] not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  20k
                                </Text>
                                <Text
                                  className="font-normal md:ml-[0] ml-[3px] mt-[26px] not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  15k
                                </Text>
                                <Text
                                  className="font-normal md:ml-[0] ml-[2px] mt-[25px] not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  10k
                                </Text>
                                <Text
                                  className="font-normal md:ml-[0] ml-[8px] mt-[26px] not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  5k
                                </Text>
                                <Text
                                  className="font-normal md:ml-[0] ml-[7px] mt-[25px] not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  0k
                                </Text>
                              </div>
                              <div
                                className="bg-cover bg-no-repeat flex md:flex-1 h-[200px] items-end justify-start p-[26px] sm:px-[20px] md:w-[100%] w-[96%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group1717.png')",
                                }}
                              >
                                <div className="flex flex-col items-center justify-start mb-[78px] mr-[136px] w-[auto]">
                                  <div className="bg-black_901 flex items-center justify-center px-[11px] py-[10px] rounded-[5px] w-[auto]">
                                    <Text
                                      className="font-medium text-left text-white_A700 w-[auto]"
                                      variant="body3"
                                    >
                                      $2311.65 5 May
                                    </Text>
                                  </div>
                                  <Img
                                    src="images/img_arrow.svg"
                                    className="h-[8px] w-[14px]"
                                    alt="Arrow"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-end ml-[auto] md:w-[100%] w-[96%]">
                              <Text
                                className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                variant="body2"
                              >
                                Mon
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[74px] not-italic text-bluegray_900 text-left w-[auto]"
                                variant="body2"
                              >
                                Tue
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[74px] not-italic text-bluegray_900 text-left w-[auto]"
                                variant="body2"
                              >
                                Wed
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[71px] not-italic text-bluegray_900 text-left w-[auto]"
                                variant="body2"
                              >
                                Thu
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[73px] not-italic text-bluegray_900 text-left w-[auto]"
                                variant="body2"
                              >
                                Fri
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[74px] not-italic text-bluegray_900 text-left w-[auto]"
                                variant="body2"
                              >
                                Sat
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[70px] not-italic text-bluegray_900 text-left w-[auto]"
                                variant="body2"
                              >
                                Sun
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex md:flex-1 items-center justify-end p-[21px] sm:px-[20px] rounded-[8px] md:w-[100%] w-[35%]">
                      <div className="flex flex-col items-center justify-start mt-[3px] md:w-[100%] w-[99%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-semibold mt-[5px] text-bluegray_900 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Expense Tracking
                          </Text>
                          <div className="flex flex-row gap-[8px] items-center justify-between mb-[5px] w-[31%]">
                            <Text
                              className="font-semibold text-bluegray_600 text-left w-[auto]"
                              variant="body2"
                            >
                              This Month
                            </Text>
                            <Img
                              src="images/img_arrowdown.svg"
                              className="h-[20px] w-[20px]"
                              alt="arrowdown One"
                            />
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex h-[200px] items-start justify-start mt-[35px] p-[35px] sm:px-[20px] w-[200px]"
                          style={{
                            backgroundImage: "url('images/img_group30.svg')",
                          }}
                        >
                          <div className="flex flex-row gap-[47px] items-start justify-start mb-[2px] mt-[13px] md:w-[100%] w-[90%]">
                            <div className="flex flex-col md:gap-[40px] gap-[63px] justify-start mt-[18px] w-[auto]">
                              <Text
                                className="font-semibold mr-[8px] text-left text-white_A700 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                28%
                              </Text>
                              <Text
                                className="font-semibold md:ml-[0] ml-[10px] text-left text-white_A700 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                12%
                              </Text>
                            </div>
                            <div className="flex flex-col md:gap-[40px] gap-[63px] items-start justify-start mb-[18px] w-[auto]">
                              <Text
                                className="font-semibold text-left text-white_A700 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                24%
                              </Text>
                              <Text
                                className="font-semibold md:ml-[0] ml-[3px] text-left text-white_A700 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                36%
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-start mt-[13px] pt-[3px] md:w-[100%] w-[91%]">
                          <div className="flex flex-col gap-[17px] items-start justify-start w-[100%]">
                            <div className="flex flex-row items-start justify-between md:w-[100%] w-[95%]">
                              <div className="flex flex-row gap-[8px] items-center justify-start w-[25%]">
                                <div className="bg-blue_900 h-[8px] my-[2px] rounded-[2px] w-[31%]"></div>
                                <Text
                                  className="font-semibold text-bluegray_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  Travel
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[8px] items-start justify-start w-[26%]">
                                <div className="bg-blue_800 h-[8px] mb-[7px] rounded-[2px] w-[30%]"></div>
                                <Text
                                  className="font-semibold text-bluegray_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  Sports
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-between w-[100%]">
                              <div className="flex flex-row gap-[8px] items-start justify-start w-[32%]">
                                <div className="bg-blue_A700 h-[8px] mb-[7px] rounded-[2px] w-[23%]"></div>
                                <Text
                                  className="font-semibold text-bluegray_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  Shopping
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[8px] items-center justify-start w-[31%]">
                                <div className="bg-blue_A200 h-[8px] my-[2px] rounded-[2px] w-[24%]"></div>
                                <Text
                                  className="font-semibold text-bluegray_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  Medicine
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-gray_51 md:h-[1056px] h-[1109px] inset-y-[0] my-[auto] pb-[53px] right-[2%] shadow-bs w-[23%]">
            <div className="bg-gray_51 h-[1056px] mx-[auto] shadow-bs w-[100%]"></div>
            <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[0] w-[100%]">
              <Img
                src="images/img_arrowleft.svg"
                className="h-[24px] mb-[2px] w-[24px]"
                alt="arrowleft"
              />
              <Text
                className="font-semibold mt-[4px] text-bluegray_900 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                My Profile
              </Text>
              <Img
                src="images/img_share.svg"
                className="h-[24px] mb-[2px] w-[24px]"
                alt="share"
              />
            </div>
            <div className="absolute flex inset-x-[0] items-center justify-start mx-[auto] pb-[5px] top-[6%] w-[45%]">
              <div className="flex flex-col gap-[21px] items-center justify-start w-[100%]">
                <div className="border-[1.79px] border-blue_A701 border-solid flex h-[100px] items-center justify-start p-[7px] rounded-[50%] w-[100px]">
                  <Img
                    src="images/img_profileimglarg_85X85.png"
                    className="h-[85px] md:h-[auto] rounded-[50%] w-[85px]"
                    alt="ProfileImgLarg One"
                  />
                </div>
                <Text
                  className="font-semibold text-bluegray_900 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Michelle Rock
                </Text>
              </div>
            </div>
            <div className="absolute flex inset-x-[0] items-center justify-start mx-[auto] top-[21%] w-[100%]">
              <div className="flex flex-col gap-[13px] items-center justify-start pt-[4px] w-[100%]">
                <div className="flex flex-col gap-[19px] items-start justify-start pb-[5px] pr-[5px] w-[100%]">
                  <Text
                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Mobile Number
                  </Text>
                  <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      (808) 555-0111
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                  <Text
                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Email
                  </Text>
                  <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Michellerock@gmail.com
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdhocReportingPage;
