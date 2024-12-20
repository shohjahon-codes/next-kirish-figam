import Link from "next/link";
import React from "react";

const UserId = () => {
  return (
    <>
      <section className="pt-[94px] pb-[129px]">
        <div className="w-[90%] mx-auto ">
          <div className="flex gap-[30px]">
            <div>
              <div
                className="w-[255px] pt-[62px] pb-[24px] pl-[24px] rounded-[10px] mb-[24px]"
                style={{
                  backgroundImage: "url(./img/Oval.svg)",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h2 className="font-bold text-[20px] tracking-[-0.01em] text-[#fff]">
                  Frontend Mentor
                </h2>
                <p className="font-medium text-[15px] text-[#E5D1FD]">
                  Feedback Board
                </p>
              </div>
              <div className="w-[255px] py-[24px] pl-[24px] pr-[50px] rounded-[10px] bg-[#fff] mb-[24px] flex flex-wrap gap-[8px] tab_list"></div>
              <div className="w-[255px] pt-[19px] px-[24px] pb-[24px] rounded-[10px] bg-[#fff]">
                <div className="flex items-center justify-between mb-[24px]">
                  <p className="font-bold text-[18px] tracking-[-0.01em] text-[#3a4374]">
                    Roadmap
                  </p>
                  <a
                    className="font-semibold text-[13px] text-[#4661e6] underline"
                    href="#"
                  >
                    View
                  </a>
                </div>
                <div className="flex items-center justify-between mb-[8px]">
                  <div className="flex items-center gap-[16px]">
                    <span className="rounded-[50%] w-[8px] h-[8px] bg-[#f49f85] inline-block" />
                    <p className="font-normal text-[16px] text-[#647196]">
                      Planned
                    </p>
                  </div>
                  <p className="font-bold text-[16px] text-[#647196] ">2</p>
                </div>
                <div className="flex items-center justify-between mb-[8px]">
                  <div className="flex items-center gap-[16px]">
                    <span className="rounded-[50%] w-[8px] h-[8px] bg-[#ad1fea] inline-block" />
                    <p className="font-normal text-[16px] text-[#647196]">
                      In-Progress
                    </p>
                  </div>
                  <p className="font-bold text-[16px] text-[#647196] ">3</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[16px]">
                    <span className="rounded-[50%] w-[8px] h-[8px] bg-[#62bcfa] inline-block" />
                    <p className="font-normal text-[16px] text-[#647196]">
                      Live
                    </p>
                  </div>
                  <p className="font-bold text-[16px] text-[#647196] ">1</p>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[825px] rounded-[10px] bg-[#373f68] py-[23px] pl-[24px] pr-[16px] flex justify-between mb-[24px]">
                <div className="flex items-center gap-[38px]">
                  <div className="flex gap-[16px]">
                    <img src="./img/icon1.svg" alt="imag" />
                    <p className="font-bold text-[18px] tracking-[-0.01em] text-[#fff]">
                      6 Suggestions
                    </p>
                  </div>
                  <div className="flex gap-[5px]">
                    <p className="font-normal text-[14px] text-[#f2f4fe]">
                      Sort by :
                    </p>
                    <div className="flex gap-[9px]">
                      <p className="font-bold text-[14px] text-[#f2f4fe] before: ">
                        Most Upvotes
                      </p>
                      <img src="./img/icon.2.svg" alt="icon" />
                    </div>
                  </div>
                </div>
                <input
                  className="search_input rounded-[10px] py-[12px] px-[24px] border-[2px] "
                  type="search"
                  placeholder="Search"
                />
                <button className="add_btn font-bold text-[14px] text-[#f2f4fe] rounded-[10px] bg-[#ad1fea] py-[12px] px-[24px] inline-block">
                  + Add Feedback
                </button>
              </div>
              <Link href="/1">
                <ul className="feedback_list">
                  <li className="w-[825px] rounded-[10px] bg-[#fff] py-[28px] px-[32px] flex items-center justify-between mb-[20px]">
                    <div className="flex items-start gap-[40px]">
                      <a
                        className="font-bold text-[13px] tracking-[-0.01em] text-[#3a4374] text-center rounded-[10px] bg-[#f2f4fe] px-[9px] pb-[8px] pt-[14px] inline-block"
                        href="#"
                      >
                        <img
                          className="mb-[8px] ml-[5px]"
                          src="./img/icon3.svg"
                          alt="icon"
                        />
                        112
                      </a>
                      <div>
                        <p className="font-bold text-[18px] tracking-[-0.01em] text-[#3a4374] mb-[4px]">
                          Add tags for solutions
                        </p>
                        <p className="font-normal text-[16px] text-[#647196] mb-[12px]">
                          Easier to search for solutions based on a specific
                          stack.
                        </p>
                        <a
                          className="font-semibold text-[13px] text-[#4661e6] rounded-[10px] bg-[#f2f4ff] py-[6px] px-[16px]"
                          href="#"
                        >
                          Enhancement
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-[8px]">
                      <img src="./img/icon4.svg" alt="icon" />
                      <p className="font-bold text-[16px] tracking-[-0.01em] text-[#3a4374]">
                        2
                      </p>
                    </div>
                  </li>
                </ul>
              </Link>
              <Link href="/2">
                <ul className="feedback_list">
                  <li className="w-[825px] rounded-[10px] bg-[#fff] py-[28px] px-[32px] flex items-center justify-between mb-[20px]">
                    <div className="flex items-start gap-[40px]">
                      <a
                        className="font-bold text-[13px] tracking-[-0.01em] text-[#3a4374] text-center rounded-[10px] bg-[#f2f4fe] px-[9px] pb-[8px] pt-[14px] inline-block"
                        href="#"
                      >
                        <img
                          className="mb-[8px] ml-[5px]"
                          src="./img/icon3.svg"
                          alt="icon"
                        />
                        112
                      </a>
                      <div>
                        <p className="font-bold text-[18px] tracking-[-0.01em] text-[#3a4374] mb-[4px]">
                          Add tags for solutions
                        </p>
                        <p className="font-normal text-[16px] text-[#647196] mb-[12px]">
                          Easier to search for solutions based on a specific
                          stack.
                        </p>
                        <a
                          className="font-semibold text-[13px] text-[#4661e6] rounded-[10px] bg-[#f2f4ff] py-[6px] px-[16px]"
                          href="#"
                        >
                          Enhancement
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-[8px]">
                      <img src="./img/icon4.svg" alt="icon" />
                      <p className="font-bold text-[16px] tracking-[-0.01em] text-[#3a4374]">
                        2
                      </p>
                    </div>
                  </li>
                </ul>
              </Link>
              <Link href="/3">
                <ul className="feedback_list">
                  <li className="w-[825px] rounded-[10px] bg-[#fff] py-[28px] px-[32px] flex items-center justify-between mb-[20px]">
                    <div className="flex items-start gap-[40px]">
                      <a
                        className="font-bold text-[13px] tracking-[-0.01em] text-[#3a4374] text-center rounded-[10px] bg-[#f2f4fe] px-[9px] pb-[8px] pt-[14px] inline-block"
                        href="#"
                      >
                        <img
                          className="mb-[8px] ml-[5px]"
                          src="./img/icon3.svg"
                          alt="icon"
                        />
                        112
                      </a>
                      <div>
                        <p className="font-bold text-[18px] tracking-[-0.01em] text-[#3a4374] mb-[4px]">
                          Add tags for solutions
                        </p>
                        <p className="font-normal text-[16px] text-[#647196] mb-[12px]">
                          Easier to search for solutions based on a specific
                          stack.
                        </p>
                        <a
                          className="font-semibold text-[13px] text-[#4661e6] rounded-[10px] bg-[#f2f4ff] py-[6px] px-[16px]"
                          href="#"
                        >
                          Enhancement
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-[8px]">
                      <img src="./img/icon4.svg" alt="icon" />
                      <p className="font-bold text-[16px] tracking-[-0.01em] text-[#3a4374]">
                        2
                      </p>
                    </div>
                  </li>
                </ul>
              </Link>
              <Link href="/4">
                <ul className="feedback_list">
                  <li className="w-[825px] rounded-[10px] bg-[#fff] py-[28px] px-[32px] flex items-center justify-between mb-[20px]">
                    <div className="flex items-start gap-[40px]">
                      <a
                        className="font-bold text-[13px] tracking-[-0.01em] text-[#3a4374] text-center rounded-[10px] bg-[#f2f4fe] px-[9px] pb-[8px] pt-[14px] inline-block"
                        href="#"
                      >
                        <img
                          className="mb-[8px] ml-[5px]"
                          src="./img/icon3.svg"
                          alt="icon"
                        />
                        112
                      </a>
                      <div>
                        <p className="font-bold text-[18px] tracking-[-0.01em] text-[#3a4374] mb-[4px]">
                          Add tags for solutions
                        </p>
                        <p className="font-normal text-[16px] text-[#647196] mb-[12px]">
                          Easier to search for solutions based on a specific
                          stack.
                        </p>
                        <a
                          className="font-semibold text-[13px] text-[#4661e6] rounded-[10px] bg-[#f2f4ff] py-[6px] px-[16px]"
                          href="#"
                        >
                          Enhancement
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-[8px]">
                      <img src="./img/icon4.svg" alt="icon" />
                      <p className="font-bold text-[16px] tracking-[-0.01em] text-[#3a4374]">
                        2
                      </p>
                    </div>
                  </li>
                </ul>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserId;
