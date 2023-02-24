import React from "react";

import { Img, Input, Text, Line, List, Button } from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SalesReportingPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_53 flex font-gilroy items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div className="bg-white_A700 flex items-center justify-start p-[22px] sm:px-[20px] w-[100%]">
            <div className="flex items-center justify-start max-w-[1286px] mx-[auto] md:px-[20px] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                <Img
                  src="images/img_group_9.svg"
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
                    <div className="flex flex-row gap-[8px] items-start justify-start my-[9px] md:w-[100%] w-[31%]">
                      <Img
                        src="images/img_user.svg"
                        className="h-[24px] w-[24px]"
                        alt="user"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-bluegray_700 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Users
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start p-[8px] w-[100%]">
                    <div className="flex flex-row gap-[8px] items-start justify-start my-[8px] md:w-[100%] w-[49%]">
                      <Img
                        src="images/img_grid.svg"
                        className="h-[24px] w-[24px]"
                        alt="grid"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-bluegray_700 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Categories
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start p-[8px] w-[100%]">
                    <div className="flex flex-row gap-[8px] items-start justify-start my-[9px] md:w-[100%] w-[31%]">
                      <Img
                        src="images/img_edit.svg"
                        className="h-[24px] w-[24px]"
                        alt="edit"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-bluegray_700 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Items
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start p-[8px] w-[100%]">
                    <div className="flex flex-row gap-[8px] items-start justify-start my-[9px] md:w-[100%] w-[35%]">
                      <Img
                        src="images/img_bag.svg"
                        className="h-[24px] w-[24px]"
                        alt="bag"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-bluegray_700 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Orders
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[6px] items-center justify-start p-[8px] w-[100%]">
                    <Line className="bg-blue_A700 h-[24px] my-[9px] w-[2px]" />
                    <div className="flex flex-row gap-[8px] items-start justify-center my-[8px] w-[36%]">
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
                    <div className="flex flex-row gap-[8px] items-start justify-start my-[9px] md:w-[100%] w-[54%]">
                      <Img
                        src="images/img_notification.svg"
                        className="h-[24px] w-[24px]"
                        alt="notification One"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-bluegray_700 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Notifications
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
            <div className="flex flex-1 flex-col gap-[29px] items-start justify-start w-[100%]">
              <Text
                className="font-semibold text-gray_901 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Dashboard
              </Text>
              <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between rounded-[6px] w-[100%]">
                  <List
                    className="md:flex-1 sm:flex-col flex-row md:gap-[40px] gap-[65px] grid sm:grid-cols-1 grid-cols-2 md:w-[100%] w-[47%]"
                    orientation="horizontal"
                  >
                    <div className="bg-white_A700 flex flex-col gap-[22px] items-start justify-end sm:ml-[0] p-[8px] rounded-[6px] shadow-bs2 w-[100%]">
                      <Text
                        className="font-semibold md:ml-[0] ml-[8px] mt-[17px] text-blue_A700 text-left w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        $2500
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[8px] text-black_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        January
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-col gap-[22px] items-start justify-end sm:ml-[0] p-[8px] rounded-[6px] shadow-bs2 w-[100%]">
                      <Text
                        className="font-semibold md:ml-[0] ml-[8px] mt-[17px] text-blue_A700 text-left w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        $3700
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[8px] text-black_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        February
                      </Text>
                    </div>
                  </List>
                  <div className="bg-white_A700 flex md:flex-1 flex-col gap-[21px] items-start justify-end p-[13px] rounded-[6px] shadow-bs2 md:w-[100%] w-[auto]">
                    <Text
                      className="font-semibold md:ml-[0] ml-[2px] mt-[11px] text-blue_A700 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      $1660
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[2px] text-black_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      March
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex md:flex-1 flex-col gap-[22px] items-start justify-end p-[8px] rounded-[6px] shadow-bs2 md:w-[100%] w-[auto]">
                    <Text
                      className="font-semibold md:ml-[0] ml-[8px] mt-[17px] text-blue_A700 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      $1280
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[8px] text-black_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      April
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                  <div className="flex md:flex-col flex-row gap-[32px] items-center justify-between w-[100%]">
                    <div className="bg-white_A700 flex md:flex-1 flex-col gap-[20px] items-start justify-start p-[16px] rounded-[8px] md:w-[100%] w-[71%]">
                      <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:ml-[0] ml-[8px] md:w-[100%] w-[97%]">
                        <Text
                          className="font-semibold text-gray_901 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Total Revenue
                        </Text>
                        <div className="bg-blue_50 flex sm:flex-col flex-row gap-[18px] items-center justify-center md:ml-[0] ml-[150px] p-[8px] rounded-[6px] md:w-[100%] w-[57%]">
                          <Button className="cursor-pointer font-medium min-w-[38px] sm:ml-[0] ml-[8px] text-[12px] text-center text-gray_902 w-[auto]">
                            24H
                          </Button>
                          <Button className="cursor-pointer font-medium min-w-[33px] text-[12px] text-center text-gray_902 w-[auto]">
                            1W
                          </Button>
                          <Button className="cursor-pointer font-medium min-w-[30px] text-[12px] text-center text-gray_902 w-[auto]">
                            1M
                          </Button>
                          <Button className="cursor-pointer font-medium min-w-[33px] text-[12px] text-center text-gray_902 w-[auto]">
                            3M
                          </Button>
                          <Button className="cursor-pointer font-medium min-w-[33px] text-[12px] text-center text-gray_902 w-[auto]">
                            6M
                          </Button>
                          <Button
                            className="cursor-pointer font-bold text-[12px] text-center text-white_A700 w-[29px]"
                            variant="FillBlueA700"
                          >
                            1Y
                          </Button>
                          <Button className="cursor-pointer font-medium min-w-[59px] mr-[8px] text-[12px] text-center text-gray_902 w-[auto]">
                            All Time
                          </Button>
                        </div>
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="h-[24px] md:ml-[0] ml-[16px] w-[24px]"
                          alt="overflowmenu"
                        />
                      </div>
                      <div className="flex flex-row gap-[24px] items-center justify-start md:ml-[0] ml-[8px] md:w-[100%] w-[35%]">
                        <Text
                          className="font-bold text-gray_901 text-left w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          $236,535
                        </Text>
                        <div className="flex flex-row gap-[14px] items-center justify-between w-[46%]">
                          <Img
                            src="images/img_floatingicon.svg"
                            className="h-[24px] w-[24px]"
                            alt="floatingicon"
                          />
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="text-blue_A700 text-left w-[auto]"
                              variant="body1"
                            >
                              0.8%
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body3"
                            >
                              Than last Day
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-start md:ml-[0] ml-[8px] md:w-[100%] w-[99%]">
                        <div className="flex md:flex-col flex-row gap-[23px] items-start justify-between w-[100%]">
                          <div className="flex md:flex-1 flex-col gap-[17px] items-start justify-start md:mt-[0] mt-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal md:ml-[0] ml-[2px] not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body2"
                            >
                              7000$
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body2"
                            >
                              6000$
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body2"
                            >
                              5000$
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body2"
                            >
                              4000$
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body2"
                            >
                              3000$
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body2"
                            >
                              2000$
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] ml-[4px] not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body2"
                            >
                              1000$
                            </Text>
                          </div>
                          <div className="h-[252px] relative md:w-[100%] w-[91%]">
                            <div className="absolute h-[199px] inset-x-[0] mx-[auto] top-[6%] w-[100%]">
                              <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
                                <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                                  <Line className="bg-bluegray_300 h-[1.24px] w-[100%]" />
                                  <Line className="bg-bluegray_300 h-[1.24px] w-[100%]" />
                                  <Line className="bg-bluegray_300 h-[1.24px] w-[100%]" />
                                  <Line className="bg-bluegray_300 h-[1.24px] w-[100%]" />
                                  <Line className="bg-bluegray_300 h-[1.24px] w-[100%]" />
                                  <Line className="bg-bluegray_300 h-[1.24px] w-[100%]" />
                                  <Line className="bg-bluegray_300 h-[1.24px] w-[100%]" />
                                </div>
                              </div>
                              <Img
                                src="images/img_vector.svg"
                                className="absolute h-[161px] inset-x-[0] mx-[auto] top-[6%] w-[83%]"
                                alt="Vector"
                              />
                            </div>
                            <div className="absolute flex flex-row h-[100%] inset-[0] items-center justify-center m-[auto] w-[93%]">
                              <div className="flex flex-col gap-[10px] items-center justify-start w-[5%]">
                                <Line className="bg-bluegray_300 h-[226px] w-[1px]" />
                                <Text
                                  className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  2015
                                </Text>
                              </div>
                              <List
                                className="sm:flex-col flex-row gap-[52px] grid grid-cols-2 w-[19%]"
                                orientation="horizontal"
                              >
                                <div className="flex flex-col gap-[10px] items-center justify-start sm:ml-[0] w-[100%]">
                                  <Line className="bg-bluegray_300 h-[226px] w-[1px]" />
                                  <Text
                                    className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                    variant="body2"
                                  >
                                    2016
                                  </Text>
                                </div>
                                <div className="flex flex-col gap-[10px] items-center justify-start sm:ml-[0] w-[100%]">
                                  <Line className="bg-bluegray_300 h-[226px] w-[1px]" />
                                  <Text
                                    className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                    variant="body2"
                                  >
                                    2017
                                  </Text>
                                </div>
                              </List>
                              <div className="flex flex-col gap-[10px] items-center justify-start w-[5%]">
                                <Line className="bg-bluegray_300 h-[226px] w-[1px]" />
                                <Text
                                  className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  2018
                                </Text>
                              </div>
                              <div className="flex flex-col gap-[10px] items-center justify-start w-[5%]">
                                <Line className="bg-bluegray_300 h-[226px] w-[1px]" />
                                <Text
                                  className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  2019
                                </Text>
                              </div>
                              <div className="flex flex-col gap-[10px] items-center justify-start w-[6%]">
                                <Line className="bg-bluegray_300 h-[226px] w-[1px]" />
                                <Text
                                  className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  2020
                                </Text>
                              </div>
                              <div className="flex flex-col gap-[10px] items-center justify-start w-[5%]">
                                <Line className="bg-bluegray_300 h-[226px] w-[1px]" />
                                <Text
                                  className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  2021
                                </Text>
                              </div>
                              <div className="flex flex-col gap-[10px] items-center justify-start w-[6%]">
                                <Line className="bg-bluegray_300 h-[226px] w-[1px]" />
                                <Text
                                  className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  2022
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex md:flex-1 flex-col gap-[24px] items-center justify-end p-[16px] rounded-[6px] shadow-bs1 md:w-[100%] w-[27%]">
                      <div className="flex flex-row items-start justify-between mt-[8px] md:w-[100%] w-[94%]">
                        <Text
                          className="font-semibold mt-[2px] text-gray_901 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Trending Items
                        </Text>
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="h-[24px] w-[24px]"
                          alt="overflowmenu One"
                        />
                      </div>
                      <List
                        className="flex-col gap-[15px] grid items-center w-[91%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-row gap-[10px] items-start justify-between w-[100%]">
                          <Img
                            src="images/img_jankoferlicg_40X40.png"
                            className="h-[40px] md:h-[auto] object-cover rounded-[3px] w-[40px]"
                            alt="jankoferlicG"
                          />
                          <div className="flex flex-row items-center justify-between mt-[5px] w-[78%]">
                            <Text
                              className="font-medium text-gray_901 text-left w-[auto]"
                              variant="body2"
                            >
                              Item 1
                            </Text>
                            <Text
                              className="font-semibold text-blue_A700 text-left w-[auto]"
                              variant="body3"
                            >
                              40
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[10px] items-start justify-between w-[100%]">
                          <Img
                            src="images/img_studioportrait_40X40.png"
                            className="h-[40px] md:h-[auto] object-cover rounded-[3px] w-[40px]"
                            alt="studioportrait"
                          />
                          <div className="flex flex-row items-center justify-between mt-[6px] w-[78%]">
                            <Text
                              className="font-medium text-gray_901 text-left w-[auto]"
                              variant="body2"
                            >
                              Item 2
                            </Text>
                            <Text
                              className="font-semibold text-blue_A700 text-left w-[auto]"
                              variant="body3"
                            >
                              40
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                          <Img
                            src="images/img_youngbeardedm_40X40.png"
                            className="h-[40px] md:h-[auto] object-cover rounded-[3px] w-[40px]"
                            alt="youngbeardedm"
                          />
                          <div className="flex flex-row items-center justify-between w-[78%]">
                            <Text
                              className="font-medium text-gray_901 text-left w-[auto]"
                              variant="body2"
                            >
                              Item 3
                            </Text>
                            <Text
                              className="font-semibold text-blue_A700 text-left w-[auto]"
                              variant="body3"
                            >
                              40
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                          <Img
                            src="images/img_cheerfulindian_40X40.png"
                            className="h-[40px] md:h-[auto] object-cover rounded-[3px] w-[40px]"
                            alt="cheerfulindian"
                          />
                          <div className="flex flex-row items-center justify-between w-[78%]">
                            <Text
                              className="font-medium text-gray_901 text-left w-[auto]"
                              variant="body2"
                            >
                              Item 4
                            </Text>
                            <Text
                              className="font-semibold text-blue_A700 text-left w-[auto]"
                              variant="body3"
                            >
                              40
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                          <Img
                            src="images/img_cheerfulindian_1.png"
                            className="h-[40px] md:h-[auto] object-cover rounded-[3px] w-[40px]"
                            alt="cheerfulindian One"
                          />
                          <div className="flex flex-row items-center justify-between w-[78%]">
                            <Text
                              className="font-medium text-gray_901 text-left w-[auto]"
                              variant="body2"
                            >
                              Item 5
                            </Text>
                            <Text
                              className="font-semibold text-blue_A700 text-left w-[auto]"
                              variant="body3"
                            >
                              40
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                          <Img
                            src="images/img_cheerfulindian_2.png"
                            className="h-[40px] md:h-[auto] object-cover rounded-[3px] w-[40px]"
                            alt="cheerfulindian Two"
                          />
                          <div className="flex flex-row items-center justify-between w-[78%]">
                            <Text
                              className="font-medium text-gray_901 text-left w-[auto]"
                              variant="body2"
                            >
                              Item 6
                            </Text>
                            <Text
                              className="font-semibold text-blue_A700 text-left w-[auto]"
                              variant="body3"
                            >
                              40
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[32px] items-center justify-between w-[100%]">
                    <div className="bg-white_A700 flex md:flex-1 items-center justify-end p-[23px] sm:px-[20px] rounded-[6px] md:w-[100%] w-[49%]">
                      <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-semibold text-black_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Number of Orders
                          </Text>
                          <Img
                            src="images/img_overflowmenu.svg"
                            className="h-[24px] w-[24px]"
                            alt="overflowmenu Two"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row font-montserrat sm:gap-[20px] items-start justify-start w-[100%]">
                          <div className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[auto]">
                            <Text
                              className="font-medium md:ml-[0] ml-[2px] rotate-[-1deg] text-black_900 text-left w-[auto]"
                              variant="body2"
                            >
                              10
                            </Text>
                            <Text
                              className="font-medium mt-[12px] rotate-[-1deg] text-black_900 text-left w-[auto]"
                              variant="body2"
                            >
                              75
                            </Text>
                            <Text
                              className="font-medium mt-[12px] rotate-[-1deg] text-black_900 text-left w-[auto]"
                              variant="body2"
                            >
                              50
                            </Text>
                            <Text
                              className="font-medium mt-[12px] rotate-[-1deg] text-black_900 text-left w-[auto]"
                              variant="body2"
                            >
                              25
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] ml-[2px] mt-[12px] rotate-[-1deg] text-black_900 text-left w-[auto]"
                              variant="body2"
                            >
                              10
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] ml-[8px] mt-[12px] rotate-[-1deg] text-black_900 text-left w-[auto]"
                              variant="body2"
                            >
                              0
                            </Text>
                          </div>
                          <div className="font-gilroy h-[171px] sm:ml-[0] ml-[4px] relative sm:w-[100%] w-[95%]">
                            <Img
                              src="images/img_group9863.svg"
                              className="h-[128px] mt-[6px] mx-[auto] w-[94%]"
                              alt="Group9863"
                            />
                            <div className="absolute flex flex-col gap-[15px] h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
                              <Img
                                src="images/img_graphlines.svg"
                                className="h-[140px] rounded-[10px] w-[99%]"
                                alt="Graphlines"
                              />
                              <div className="flex flex-row items-center justify-between w-[100%]">
                                <Text
                                  className="font-normal not-italic rotate-[-1deg] text-black_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  Jan
                                </Text>
                                <Text
                                  className="font-normal not-italic rotate-[-1deg] text-black_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  Feb
                                </Text>
                                <Text
                                  className="font-normal not-italic rotate-[-1deg] text-black_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  Mar
                                </Text>
                                <Text
                                  className="font-normal not-italic rotate-[-1deg] text-black_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  Apr
                                </Text>
                                <Text
                                  className="font-normal not-italic rotate-[-1deg] text-black_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  May
                                </Text>
                                <Text
                                  className="font-normal not-italic rotate-[-1deg] text-black_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  Jun
                                </Text>
                                <Text
                                  className="font-normal not-italic rotate-[-1deg] text-black_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  July
                                </Text>
                                <Text
                                  className="font-normal not-italic rotate-[-1deg] text-black_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  Aug
                                </Text>
                                <Text
                                  className="font-normal not-italic rotate-[-1deg] text-black_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  Sept
                                </Text>
                                <Text
                                  className="font-normal not-italic rotate-[-1deg] text-black_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  Nov
                                </Text>
                                <Text
                                  className="font-normal not-italic rotate-[-1deg] text-black_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  Dec
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[24px] sm:px-[20px] rounded-[6px] md:w-[100%] w-[49%]">
                      <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-semibold text-black_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Referrals
                          </Text>
                          <Img
                            src="images/img_overflowmenu.svg"
                            className="h-[24px] w-[24px]"
                            alt="overflowmenu Three"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[55px] items-center justify-start md:w-[100%] w-[95%]">
                          <div className="flex flex-col gap-[20px] items-center justify-start sm:w-[100%] w-[50%]">
                            <div className="flex flex-row items-center justify-between w-[100%]">
                              <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                                <div className="bg-blue_A700 h-[12px] my-[3px] rounded-[50%] w-[12px]"></div>
                                <Text
                                  className="font-medium text-gray_901 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Social Media
                                </Text>
                              </div>
                              <Text
                                className="font-medium text-bluegray_401 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                20%
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-between w-[100%]">
                              <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                                <div className="bg-green_600 h-[12px] my-[3px] rounded-[50%] w-[12px]"></div>
                                <Text
                                  className="font-medium text-gray_901 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Websites
                                </Text>
                              </div>
                              <Text
                                className="font-medium text-bluegray_401 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                15%
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-between w-[100%]">
                              <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                                <div className="bg-orange_A700 h-[12px] my-[3px] rounded-[50%] w-[12px]"></div>
                                <Text
                                  className="font-medium text-gray_901 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Others
                                </Text>
                              </div>
                              <Text
                                className="font-medium text-bluegray_401 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                15%
                              </Text>
                            </div>
                          </div>
                          <div className="h-[171px] relative w-[171px]">
                            <CircularProgressbar
                              className="h-[171px] m-[auto] overflow-visible w-[171px]"
                              value={34}
                              strokeWidth={4}
                              styles={{
                                trail: { strokeWidth: 4, stroke: "#0061ff" },
                                path: {
                                  strokeLinecap: "square",
                                  height: "100%",
                                  transformOrigin: "center",
                                  transform: "rotate(245deg)",
                                  stroke: "#eaecf0",
                                },
                              }}
                            ></CircularProgressbar>
                            <div className="absolute h-[132px] inset-[0] justify-center m-[auto] w-[132px]">
                              <CircularProgressbar
                                className="h-[132px] m-[auto] overflow-visible w-[132px]"
                                value={43}
                                counterClockwise
                                strokeWidth={5}
                                styles={{
                                  trail: { strokeWidth: 5, stroke: "#349765" },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(12deg)",
                                    stroke: "#eaecf0",
                                  },
                                }}
                              ></CircularProgressbar>
                              <div className="absolute h-[94px] inset-[0] justify-center m-[auto] w-[94px]">
                                <CircularProgressbar
                                  className="h-[94px] m-[auto] overflow-visible w-[94px]"
                                  value={52}
                                  counterClockwise
                                  strokeWidth={6}
                                  styles={{
                                    trail: {
                                      strokeWidth: 6,
                                      stroke: "#eaecf0",
                                    },
                                    path: {
                                      strokeLinecap: "square",
                                      height: "100%",
                                      transformOrigin: "center",
                                      transform: "rotate(180deg)",
                                      stroke: "#ff6700",
                                    },
                                  }}
                                ></CircularProgressbar>
                                <Text
                                  className="absolute font-bold h-[max-content] inset-[0] justify-center m-[auto] text-bluegray_400 text-left w-[max-content]"
                                  as="h5"
                                  variant="h5"
                                >
                                  100%
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
        </div>
      </div>
    </>
  );
};

export default SalesReportingPage;
