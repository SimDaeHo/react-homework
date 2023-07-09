<template>
    <div class="css-1n8pj18-Root e1bqh2dz1">
        <a href="https://partners.kakaostyle.com/redirect_shop/notice/2614" target="_blank" rel="noreferrer" class="imagePanel">
            <div>
                <img src="@/assets/img/zBanner.png" alt="banner" class="bannerImg" style="width: 1030px; height: 128px" />
            </div>
        </a>
        <div class="dashPanel">
            <div class="orderStatusHeader">
                <div class="box-top-in">
                    <div class="box-top-st">
                        <div class="orderHeaderTitle">
                            <h2>주문현황</h2>
                            <svg width="39" height="16" fill="none" viewBox="0 0 39 16">
                                <path
                                    fill="#FA6EE3"
                                    d="M24.84 8.603v4.523h-9.89v.943h10.212v1.816h-12.46v-4.539h9.908v-.943h-9.909v-1.8H24.84ZM39 .5v15.385h-2.143V.5H39Zm-3.26.072v15.133h-2.108V8.192h-2.008V6.038h2.008V.572h2.108Zm-3.09.18v2.153h-2.143c-.01.605-.03 1.2-.058 1.78a36.49 36.49 0 0 1-.125 1.692c.313 1.318.741 2.63 1.28 3.933a19.83 19.83 0 0 0 1.94 3.616c-.158.097-.312.194-.461.292-.154.102-.304.2-.448.292-.145.098-.294.19-.448.287-.154.098-.303.185-.448.267a18.758 18.758 0 0 1-1.165-2.138 25.699 25.699 0 0 1-.963-2.37 21.218 21.218 0 0 1-.785 2.493c-.308.805-.669 1.595-1.073 2.369l-2.008-.8a20.61 20.61 0 0 0 1.993-5.451c.212-.949.37-1.939.462-2.964.097-1.026.155-2.129.178-3.303h-1.993V.746h6.264v.005Zm-13.43 0v1.353c0 .857-.177 1.636-.538 2.344a5.809 5.809 0 0 1-1.469 1.84c-.63.534-1.363.97-2.196 1.298a9.882 9.882 0 0 1-2.686.641l-.202-.461a9.215 9.215 0 0 1-.188-.462l-.203-.461a9.21 9.21 0 0 1-.187-.462 9.062 9.062 0 0 0 1.897-.374 6.908 6.908 0 0 0 1.613-.729 4.682 4.682 0 0 0 1.208-1.087 3.41 3.41 0 0 0 .65-1.405h-4.694V.751h6.996ZM24.84.5v7.405h-2.23V6.91h-3.139V5.003h3.14V3.828h-2.99V1.941h2.99V.5h2.229ZM.198 1.423v3.272h3.395L0 15.423h7.802v-3.28h-3.37L8 1.424H.198Z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panelBoard">
                <div class="boardRoot">
                    <div class="boardHeader">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path
                                fill="#363644"
                                fill-rule="evenodd"
                                d="M16 2V0H5v2H1v21h11v-2H3V4h2v2h11V4h2v11h2V2h-4Zm-2 2H7V2h7v2ZM5 9h11v2H5V9Zm0 5h7v2H5v-2Zm8.42 4 2.83 2.83 5.65-5.66 1.42 1.42-5.66 5.65-1.41 1.42L12 19.41 13.42 18Z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <h3>주문</h3>
                        <span>(최근1주)</span>
                    </div>
                    <ul class="itemList">
                        <li class="item" v-for="(order, index) in orderList" :key="index" :id="'order_' + index" @click="this.$pageMove(order.link)">
                            <span>{{ order.name }}</span>
                            <strong>{{ order.numberCases }}건</strong>
                        </li>
                    </ul>
                </div>
                <div class="boardRoot">
                    <div class="boardHeader">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <mask id="Refund_24_svg__a" width="21" height="23" x="1" y="0" maskUnits="userSpaceOnUse" style="mask-type: alpha">
                                <path fill="#fff" fill-rule="evenodd" d="M13 14h9V0H1v23h12v-9Z" clip-rule="evenodd"></path>
                            </mask>
                            <g mask="url(#Refund_24_svg__a)">
                                <path fill="#363644" d="M21 22H1V6h20v16ZM3 20h16V8H3v12Z"></path>
                                <mask id="Refund_24_svg__b" width="20" height="6" x="1" y="0" maskUnits="userSpaceOnUse" style="mask-type: alpha">
                                    <path fill="#fff" fill-rule="evenodd" d="M1 0h20v6H1V0Z" clip-rule="evenodd"></path>
                                </mask>
                                <g fill="#363644" fill-rule="evenodd" clip-rule="evenodd" mask="url(#Refund_24_svg__b)">
                                    <path d="M3.996 1h14.008l5 8H-1.004l5-8Zm1.108 2-2.5 4h16.792l-2.5-4H5.104Z"></path>
                                    <path d="M10 2h2v4h-2V2Z"></path>
                                </g>
                            </g>
                            <path
                                fill="#363644"
                                fill-rule="evenodd"
                                d="m23.24 16.17-1.41-1.41L19 17.59l-2.83-2.83-1.41 1.41L17.59 19l-2.83 2.83 1.41 1.41L19 20.41l2.83 2.83 1.41-1.41L20.41 19l2.83-2.83Z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <h3>취소/반품</h3>
                        <span>(최근1주)</span>
                    </div>
                    <ul class="itemList">
                        <li class="item" v-for="(cancel, index) in cancelList" :key="index">
                            <span>{{ cancel.name }}</span>
                            <strong>{{ cancel.numberCases }}건</strong>
                        </li>
                    </ul>
                </div>
                <div class="boardRoot">
                    <div class="boardHeader">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <mask id="Exchange_24_svg__a" width="21" height="23" x="1" y="0" maskUnits="userSpaceOnUse" style="mask-type: alpha">
                                <path fill="#fff" fill-rule="evenodd" d="M12 11.753h10V0H1v22.526h11V11.753Z" clip-rule="evenodd"></path>
                            </mask>
                            <g mask="url(#Exchange_24_svg__a)">
                                <path fill="#363644" d="M21 21.547H1V5.877h20v15.67ZM3 19.588h16V7.835H3v11.753Z"></path>
                                <mask id="Exchange_24_svg__b" width="20" height="6" x="1" y="0" maskUnits="userSpaceOnUse" style="mask-type: alpha">
                                    <path fill="#fff" fill-rule="evenodd" d="M1 0h20v5.876H1V0Z" clip-rule="evenodd"></path>
                                </mask>
                                <g fill="#363644" mask="url(#Exchange_24_svg__b)">
                                    <path d="M23 8.815H-1L4 .979h14l5 7.836ZM2.61 6.855h16.78l-2.5-3.917H5.11l-2.5 3.918Z"></path>
                                    <path fill-rule="evenodd" d="M10 1.959h2v3.918h-2V1.959Z" clip-rule="evenodd"></path>
                                </g>
                            </g>
                            <mask id="Exchange_24_svg__c" width="5" height="9" x="19" y="12" maskUnits="userSpaceOnUse" style="mask-type: alpha">
                                <path fill="#fff" fill-rule="evenodd" d="M19.04 12.732h4v7.836h-4v-7.836Z" clip-rule="evenodd"></path>
                            </mask>
                            <g mask="url(#Exchange_24_svg__c)">
                                <path
                                    fill="#363644"
                                    d="M19.04 20.568c-2.21 0-4-1.754-4-3.918s1.79-3.918 4-3.918 4 1.754 4 3.918c0 2.165-1.8 3.918-4 3.918Zm0-5.877c-1.1 0-2 .882-2 1.959s.9 1.959 2 1.959 2-.882 2-1.959-.9-1.959-2-1.959Z"></path>
                            </g>
                            <path
                                fill="#363644"
                                fill-rule="evenodd"
                                d="M14.04 12.732h5v1.96h-5v-1.96ZM13 19.627l4.24-4.152 1.06 1.028-4.24 4.163L13 19.627Z"
                                clip-rule="evenodd"></path>
                            <path fill="#363644" fill-rule="evenodd" d="m13 19.628 1.06-1.039 4.24 4.153-1.06 1.038L13 19.628Z" clip-rule="evenodd"></path>
                            <path fill="#363644" fill-rule="evenodd" d="M15.04 18.609h4v1.959h-4v-1.96Z" clip-rule="evenodd"></path>
                        </svg>
                        <h3>교환</h3>
                        <span>(최근1주)</span>
                    </div>
                    <ul class="itemList">
                        <li class="item" v-for="(exchange, index) in exchangeList" :key="index">
                            <span>{{ exchange.name }}</span>
                            <strong>{{ exchange.numberCases }}건</strong>
                        </li>
                    </ul>
                </div>
                <div class="boardRoot">
                    <div class="boardHeader">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path
                                fill="#363644"
                                d="M6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM11.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM16.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                            <path
                                fill="#363644"
                                d="M3.37 3.37A11.43 11.43 0 0 1 11.5 0c3.07 0 5.96 1.2 8.13 3.37A11.43 11.43 0 0 1 23 11.5c0 2.44-.74 4.75-2.16 6.71l1.03 4.75-5.05-1.26c-1.63.85-3.46 1.3-5.32 1.3-3.07 0-5.96-1.2-8.13-3.37A11.43 11.43 0 0 1 0 11.5c0-3.07 1.2-5.96 3.37-8.13Zm1.41 14.85A9.465 9.465 0 0 0 11.5 21c1.65 0 3.27-.43 4.69-1.24l.35-.2 2.7.67-.54-2.51.29-.37A9.426 9.426 0 0 0 21 11.5c0-2.54-.99-4.92-2.78-6.72A9.465 9.465 0 0 0 11.5 2c-2.54 0-4.92.99-6.72 2.78A9.465 9.465 0 0 0 2 11.5c0 2.54.99 4.92 2.78 6.72Z"></path>
                        </svg>
                        <h3>문의</h3>
                        <span>(최근1주)</span>
                    </div>
                    <ul class="itemList">
                        <li class="item" v-for="(inquiry, index) in inquiryList" :key="index">
                            <span>{{ inquiry.name }}</span>
                            <strong>{{ inquiry.numberCases }}건</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="dashPanel">
            <div class="panelHeader2">
                <div class="box-top-in">
                    <div class="box-top-st">직진배송 현황</div>
                </div>
            </div>
            <ul class="StatusBoard2">
                <li class="StatusList2">
                    <div class="label">
                        <span>오늘 결제 완료</span>
                        <span class="today">{{ todayDate() }}</span>
                    </div>
                    <p class="unit"><em>78</em>건</p>
                </li>
                <li class="StatusList2">
                    <div class="label">고객 재입고 요청</div>
                    <p class="unit"><em>15</em>건</p>
                </li>
                <li class="StatusList3">
                    <div class="label">품절 입박 상품</div>
                    <p class="unit"><em>4</em>건</p>
                </li>
                <li class="StatusList4">
                    <div class="label">품절 상품 (옵션단위)</div>
                    <p class="unit"><em>43</em>건</p>
                </li>
            </ul>
        </div>
        <div class="multiColumBox">
            <div class="dashPanel">
                <div class="panelHeader2" spacing="auto">
                    <div spacing="8" class="box-top-in">
                        <div class="box-top-st" color="#363644">투데이</div>
                    </div>
                </div>
                <ul class="edi5c0a7 css-qvhgau-MenuGroup-StyledMenu e7v4mzy1">
                    <!--수정필요 ttm001을 전역변수명을 정하여서 전역변수를 파라미터로 보내는 방법으로 수정예정-->
                    <li :class="[this.currentST === 'ttm001' ? 'selItem-selItem' : 'selItem']" @click="chgSTM('ttm001')">
                        <div spacing="4" class="css-1ioqd1z eayv39d0">
                            <div
                                class="edi5c0a8 css-1wbpdi0-StyledSelectWrapper-StyledSelect e1r4jbf10"
                                :style="{ border: 'none', 'background-color': chgBgc }">
                                <div
                                    class="css-oi7bev-StyldedSelectTextWrapper"
                                    @click="CTBool == true ? (CTBool = false) : (CTBool = true)"
                                    ref="dropLocMenuDiv">
                                    <span class="css-1qusm4v-StyledSelectValueText e1r4jbf13">
                                        <div spacing="4" class="css-1ioqd1z eayv39d0">
                                            <svg v-html="zigzagLocImg" width="16" height="16" fill="none" viewBox="0 0 24 24"></svg>
                                            <span class="pds-text css-14olg5o e2vc0tk0" kind="Body_13_Regular" color="#363644">{{ zigzagLoc }}</span>
                                            <!-- 수정필요 추후 변경 가능성 있음 css도 적용해야해서 일단은 이전 버전으로 사용 -->
                                        </div>
                                    </span>
                                    <svg width="16" height="16" fill="none" viewBox="0 0 16 16" class="css-1wbr6ns-StyledArrowDownIcon e1r4jbf11">
                                        <path fill="#363644" d="M8 11 3.67 6.5h8.66L8 11Z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div v-if="CTBool" style="position: absolute; z-index: 101; width: 170px; transform: translate(0px, 30px)">
                            <div class="css-1b558t-StyledSelectOptionContentWrapper e1vt8ewo1">
                                <div
                                    class="css-wt96g-StyledMenuItem e1vt8ewo0"
                                    v-for="(countryItem, index) in countryList"
                                    :key="countryItem.id + index"
                                    @click="selectLoc({ loc: countryItem.value, img: countryItem.tag, index: index })">
                                    <div spacing="4" class="css-1ioqd1z eayv39d0">
                                        <svg v-html="countryItem.tag" width="16" height="16" fill="none" viewBox="0 0 24 24"></svg>
                                        <span class="pds-text css-14olg5o e2vc0tk0" kind="Body_13_Regular" color="#363644">{{ countryItem.value }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <!-- 수정필요 추후 아래 소스로 변경해야함 다른소스로도 변경가능
					<li class="selItem" v-for="(todayTabMenu, index) in todayTabMenuList" :key="index" :id="todayTabMenu.id">
						<div spacing="4" class="css-1ioqd1z eayv39d0">
							<div spacing="4" class="css-1ioqd1z eayv39d0">
								<svg width="16" height="16" fill="none" viewBox="0 0 24 24">
									<path fill="#FAE100" d="M2 5.022A3.016 3.016 0 0 1 5.01 2h13.98A3.016 3.016 0 0 1 22 5.022v13.956A3.016 3.016 0 0 1 18.99 22H5.01A3.016 3.016 0 0 1 2 18.978V5.022Z"></path>
									<path fill="#E62F71" d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z"></path>
									<path fill="#FFE500" d="m16.652 13.409-4.834-3.55c-.666-.52-.654-.797-.642-1.088a.97.97 0 0 1 .112-.39c.064-.122.154-.23.264-.317a1.064 1.064 0 0 1 .794-.224c.142.016.278.06.401.128.123.069.23.16.315.27a.96.96 0 0 1 .19.771.384.384 0 0 0 .063.299.431.431 0 0 0 .577.107.397.397 0 0 0 .176-.254 1.724 1.724 0 0 0-.004-.739 1.762 1.762 0 0 0-.313-.675 1.852 1.852 0 0 0-.571-.498 1.962 1.962 0 0 0-1.501-.171c-.25.072-.48.193-.678.355a1.81 1.81 0 0 0-.47.586 1.736 1.736 0 0 0-.186.717c-.024.489.034 1.028.956 1.747l4.778 3.493c.1.102.055.216-.048.216H7.999c-.107 0-.15-.114-.049-.216l3.062-2.236a.387.387 0 0 0 .033-.529.433.433 0 0 0-.545-.094L7.373 13.41a.928.928 0 0 0-.338.487.89.89 0 0 0 .034.584c.08.164.21.301.373.394a.978.978 0 0 0 .54.124h8.031a.981.981 0 0 0 .54-.125.92.92 0 0 0 .373-.393.893.893 0 0 0 .047-.579.927.927 0 0 0-.32-.492Z"></path>
								</svg>
								<span class="text0100">{{todayTabMenu.value}}</span>
							</div>
						</div>
					</li> -->
                    <li :class="[this.currentST === 'ttm002' ? 'selItem-selItem' : 'selItem']" @click="chgSTM('ttm002')">
                        <div spacing="4" class="css-1ioqd1z eayv39d0">
                            <div spacing="4" class="css-1ioqd1z eayv39d0">
                                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                                    <path
                                        fill="#FAE100"
                                        d="M2 5.022A3.016 3.016 0 0 1 5.01 2h13.98A3.016 3.016 0 0 1 22 5.022v13.956A3.016 3.016 0 0 1 18.99 22H5.01A3.016 3.016 0 0 1 2 18.978V5.022Z"></path>
                                    <path fill="#E62F71" d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z"></path>
                                    <path
                                        fill="#FFE500"
                                        d="m16.652 13.409-4.834-3.55c-.666-.52-.654-.797-.642-1.088a.97.97 0 0 1 .112-.39c.064-.122.154-.23.264-.317a1.064 1.064 0 0 1 .794-.224c.142.016.278.06.401.128.123.069.23.16.315.27a.96.96 0 0 1 .19.771.384.384 0 0 0 .063.299.431.431 0 0 0 .577.107.397.397 0 0 0 .176-.254 1.724 1.724 0 0 0-.004-.739 1.762 1.762 0 0 0-.313-.675 1.852 1.852 0 0 0-.571-.498 1.962 1.962 0 0 0-1.501-.171c-.25.072-.48.193-.678.355a1.81 1.81 0 0 0-.47.586 1.736 1.736 0 0 0-.186.717c-.024.489.034 1.028.956 1.747l4.778 3.493c.1.102.055.216-.048.216H7.999c-.107 0-.15-.114-.049-.216l3.062-2.236a.387.387 0 0 0 .033-.529.433.433 0 0 0-.545-.094L7.373 13.41a.928.928 0 0 0-.338.487.89.89 0 0 0 .034.584c.08.164.21.301.373.394a.978.978 0 0 0 .54.124h8.031a.981.981 0 0 0 .54-.125.92.92 0 0 0 .373-.393.893.893 0 0 0 .047-.579.927.927 0 0 0-.32-.492Z"></path>
                                </svg>
                                <span class="text0100">패션 바이 카카오</span>
                            </div>
                        </div>
                    </li>
                    <li :class="[this.currentST === 'ttm003' ? 'selItem-selItem' : 'selItem']" @click="chgSTM('ttm003')">
                        <div spacing="4" class="css-1ioqd1z eayv39d0">
                            <div spacing="4" class="css-1ioqd1z eayv39d0">
                                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                                    <path
                                        fill="#FA7840"
                                        d="M18.667 2H5.333A3.333 3.333 0 0 0 2 5.333v13.334A3.333 3.333 0 0 0 5.333 22h13.334A3.333 3.333 0 0 0 22 18.667V5.333A3.333 3.333 0 0 0 18.667 2Z"></path>
                                    <path
                                        fill="#fff"
                                        d="M19.902 8.084h-1.443a.117.117 0 0 0-.111.077l-.245.716c-.452 1.277-.923 2.619-1.745 2.619a.366.366 0 0 1-.153-.03.305.305 0 0 1-.064-.04.404.404 0 0 1-.136-.271 1.34 1.34 0 0 1 .008-.358c.02-.149.052-.296.09-.442.043-.166.094-.33.149-.492.057-.17.119-.339.183-.506a20.388 20.388 0 0 1 .374-.91l.054-.126.044-.102c.027-.064-.023-.135-.096-.135h-1.447a.118.118 0 0 0-.11.071l-.032.08c-.217.512-.272.646-.598 1.53-.22.596-.448 1.043-.84 1.552-.35.454-.77.784-1.2.879a.495.495 0 0 1-.144.012c-.22-.017-.36-.185-.313-.388.067-.285.288-.6.472-.92.32-.609.645-1.157.628-1.727 0-.68-.519-1.173-1.233-1.173-.6 0-1.371.295-1.978 1.208-.033.05-.115.019-.103-.04.068-.319.108-.578-.018-.812-.203-.38-.745-.362-.89-.347-.326.032-.713.141-1.215.57-.123.105-.305.32-.512.577l-.001.001-.016.019a.25.25 0 0 1-.051.047.106.106 0 0 1-.02.007.065.065 0 0 1-.07-.023l-.003-.003c-.02-.046.03-.095.029-.095.298-.354.468-.805.494-.97.005-.03-.017-.053-.048-.053H6.005a.097.097 0 0 0-.093.063l-1.907 5.377c-.021.06.026.123.093.123H5.51a.117.117 0 0 0 .113-.08l.079-.241c.863-2.686 1.576-3.751 2.35-3.796.078-.004.17.02.215.084.051.072.056.166.054.25a1.93 1.93 0 0 1-.048.358c-.046.19-.11.407-.182.63l-.953 2.609-.023.062c-.023.06.024.124.092.124h1.4a.117.117 0 0 0 .112-.079l.026-.078c.379-1.106 1.343-3.962 2.467-3.962.067 0 .243 0 .243.272 0 .246-.198.575-.412.97-.268.493-.543.95-.585 1.47-.07.858.515 1.407 1.383 1.458.655.04 1.6-.378 2.295-1.136.096-.105.216-.264.318-.394a.048.048 0 0 1 .079.007c.026.05.054.096.086.141.238.337.643.508 1.204.508.35 0 .717-.115 1.02-.313.038-.025.087.01.072.051l-.163.444a.048.048 0 0 1-.04.03c-1.072.108-2.054.373-2.768.748-.898.472-1.353 1.086-1.353 1.827 0 .958.931 1.396 1.853 1.387 1.555-.015 2.825-1.126 3.494-3.044.33-.948.659-1.837.965-2.7l1.09-3.049c.022-.06-.025-.123-.092-.123Zm-3.621 6.22c-.477.912-1.095 1.432-1.71 1.432-.188 0-.412-.054-.412-.311 0-.213.22-.471.589-.692.39-.234.913-.408 1.483-.494.038-.005.066.032.05.064Z"></path>
                                </svg>
                                <span class="text0100">마이스토어</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="todayStatsCardWrapper">
                    <div class="todayStatsCard" v-for="(item, index) in todayBoardMenuList[this.todayBoardIndex]" :key="index">
                        <div class="tsmb0100">
                            <div spacing="3" class="tstf0100">
                                <span class="text0100" kind="Heading_15_SemiBold">{{ item.title }} </span>
                                <div
                                    v-if="index > 1"
                                    class="hover-icon css-124ql05-StyledHoverIcon e1gz3wmf1"
                                    @mouseenter="showTooltip(index)"
                                    @mouseleave="hideTooltip">
                                    <div class="hover-icon__icon">
                                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" class="css-1kap19h-StyledIconHelp14 edi5c0a3">
                                            <path
                                                fill="#AAAAB7"
                                                fill-rule="evenodd"
                                                d="M12 7.75c-.943 0-1.75.84-1.75 1.875h-1.5C8.75 7.86 10.133 6.25 12 6.25c1.725 0 3.36 1.533 3.244 3.421-.045.736-.345 1.318-.695 1.791a9.925 9.925 0 0 1-.823.933l-.237.249-.01.01-.01.01-.002.004-.021.02a3.69 3.69 0 0 0-.353.446c-.21.314-.343.626-.343.866h-1.5c0-.694.337-1.314.597-1.701a5.215 5.215 0 0 1 .506-.637c.016-.018.03-.031.04-.041l.005-.006c.107-.116.21-.222.306-.322.242-.253.452-.471.64-.724.24-.326.381-.634.403-.99.06-.963-.823-1.829-1.747-1.829ZM11.25 17.3v-1.7h1.5v1.7h-1.5Z"
                                                clip-rule="evenodd"></path>
                                            <path
                                                fill="#AAAAB7"
                                                fill-rule="evenodd"
                                                d="M12 21.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19Zm0 1.5c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <AllToolTips v-if="index > 1" v-show="tooltipOpen == index" :tooltipNum="tooltipNum" />
                                </div>
                            </div>
                            <div spacing="2" class="tsts0200">
                                <span class="tscc0100" kind="Heading_20_Bold">{{ item.amount }}</span>
                                <span class="tscu0100" kind="Body_13_Bold">{{ item.unit }}</span>
                            </div>
                            <div class="tstl0300" v-html="item.img"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dashPanel">
                <div class="announTabHeader">
                    <ul class="announTab">
                        <li :class="[this.announCTI === 0 ? 'selTabItem' : 'notSelTabItem']" @click="chgAnnounTab(0)">공지사항</li>
                        <li :class="[this.announCTI === 1 ? 'selTabItem' : 'notSelTabItem']" @click="chgAnnounTab(1)">
                            판매 채널 현황
                            <svg width="10" height="10" fill="none" viewBox="0 0 24 24" class="css-1nze7lp">
                                <path fill="#FF349C" d="M2 22h5.489V9.53h.137L15.86 22H22V2h-5.489v11.19h-.103L8.964 2H2v20Z"></path>
                            </svg>
                        </li>
                    </ul>
                    <button class="linkButton">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path
                                fill="#C1C1CB"
                                fill-rule="evenodd"
                                d="M14.94 12 7.47 4.53l1.06-1.06L17.06 12l-8.53 8.53-1.06-1.06L14.94 12Z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div class="announTabPenel">
                    <ul class="announListWrap efu82py0" v-show="this.announCTI == 0">
                        <!--/** 수정필요 게시글 데이터 받아와서 for문으로 li에 데이터 입력해주면 됌*/-->
                        <li class="announItem">
                            <a class="announLink" href="/shop/momentum-shop/notice/2832">
                                <span class="announTitle">[일반] [지그재그 인사이트] 메시지 광고비 지원 프로그램 종료</span>
                                <span class="announDate">2023.06.23</span>
                            </a>
                        </li>
                        <li class="announItem">
                            <a class="announLink" href="/shop/momentum-shop/notice/2837">
                                <span class="announTitle">[일반] [카카오스타일] 1원 단위 판매가 상품 지원 방식 변경 안내</span>
                                <span class="announDate">2023.06.22</span>
                            </a>
                        </li>
                        <li class="announItem">
                            <a class="announLink" href="/shop/momentum-shop/notice/2836">
                                <span class="announTitle">[기획전] [참여 모집] 패션 by kakao 7월 3주 - 8월 1주차 성장지원 스토어 모집 안내</span>
                                <span class="announDate">2023.06.22</span>
                            </a>
                        </li>
                        <li class="announItem">
                            <a class="announLink" href="/shop/momentum-shop/notice/2834">
                                <span class="announTitle">[기획전] [참여 모집] 7월 2주차 #주말특가 기획전</span>
                                <span class="announDate">2023.06.22</span>
                            </a>
                        </li>
                        <li class="announItem">
                            <a class="announLink" href="/shop/momentum-shop/notice/2828">
                                <span class="announTitle">[광고] [광고] 노출지원 프로그램 광고주 모집 안내 : 월 매출 500만원 이하 광고주 (접수 중)</span>
                                <span class="announDate">2023.06.21</span>
                            </a>
                        </li>
                        <li class="announItem">
                            <a class="announLink" href="/shop/momentum-shop/notice/2829">
                                <span class="announTitle">[직진배송] [안내] 직진배송 서비스 개선사항 안내</span>
                                <span class="announDate">2023.06.21</span>
                            </a>
                        </li>
                        <li class="announItem">
                            <a class="announLink" href="/shop/momentum-shop/notice/2827">
                                <span class="announTitle">[기획전] [선정 공지] 패션 by Kakao 7월 MD'S PICK #바캉스편 기획전 선정 안내</span>
                                <span class="announDate">2023.06.21</span>
                            </a>
                        </li>
                    </ul>
                    <ul class="saleCSListWrap" v-show="this.announCTI == 1">
                        <li class="sCSItem">
                            <span class="sCSiteName">
                                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                                    <path
                                        fill="#FA6EE3"
                                        d="M2 5.022A3.016 3.016 0 0 1 5.01 2h13.98A3.016 3.016 0 0 1 22 5.022v13.956A3.016 3.016 0 0 1 18.99 22H5.01A3.016 3.016 0 0 1 2 18.978V5.022Z"></path>
                                    <path fill="#000" d="M8.198 6.5v2.57h3.395L8 17.5h7.802v-2.577h-3.37L16 6.5H8.198Z"></path></svg>지그재그
                            </span>
                            <div class="sCStatusWrap">
                                <p class="sCStatusText-completeText">입점 완료</p>
                            </div>
                        </li>
                        <li class="sCSItem">
                            <span class="sCSiteName">
                                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                                    <path
                                        fill="#FAE100"
                                        d="M2 5.022A3.016 3.016 0 0 1 5.01 2h13.98A3.016 3.016 0 0 1 22 5.022v13.956A3.016 3.016 0 0 1 18.99 22H5.01A3.016 3.016 0 0 1 2 18.978V5.022Z"></path>
                                    <path fill="#E62F71" d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z"></path>
                                    <path
                                        fill="#FFE500"
                                        d="m16.652 13.409-4.834-3.55c-.666-.52-.654-.797-.642-1.088a.97.97 0 0 1 .112-.39c.064-.122.154-.23.264-.317a1.064 1.064 0 0 1 .794-.224c.142.016.278.06.401.128.123.069.23.16.315.27a.96.96 0 0 1 .19.771.384.384 0 0 0 .063.299.431.431 0 0 0 .577.107.397.397 0 0 0 .176-.254 1.724 1.724 0 0 0-.004-.739 1.762 1.762 0 0 0-.313-.675 1.852 1.852 0 0 0-.571-.498 1.962 1.962 0 0 0-1.501-.171c-.25.072-.48.193-.678.355a1.81 1.81 0 0 0-.47.586 1.736 1.736 0 0 0-.186.717c-.024.489.034 1.028.956 1.747l4.778 3.493c.1.102.055.216-.048.216H7.999c-.107 0-.15-.114-.049-.216l3.062-2.236a.387.387 0 0 0 .033-.529.433.433 0 0 0-.545-.094L7.373 13.41a.928.928 0 0 0-.338.487.89.89 0 0 0 .034.584c.08.164.21.301.373.394a.978.978 0 0 0 .54.124h8.031a.981.981 0 0 0 .54-.125.92.92 0 0 0 .373-.393.893.893 0 0 0 .047-.579.927.927 0 0 0-.32-.492Z"></path></svg>패션바이카카오
                            </span>
                            <div class="sCStatusWrap">
                                <p class="sCStatusText-completeText">입점 완료</p>
                            </div>
                        </li>
                        <li class="sCSItem">
                            <span class="sCSiteName">
                                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                                    <path
                                        fill="#000"
                                        d="M18.667 2H5.333A3.333 3.333 0 0 0 2 5.333v13.334A3.333 3.333 0 0 0 5.333 22h13.334A3.333 3.333 0 0 0 22 18.667V5.333A3.333 3.333 0 0 0 18.667 2Z"></path>
                                    <path
                                        fill="#fff"
                                        d="M16.169 8.285a2.864 2.864 0 0 0-.909-.991 4.152 4.152 0 0 0-1.361-.595 6.732 6.732 0 0 0-1.678-.199H8.5v11h2.626v-4.685h1.544c.478 0 .954-.064 1.415-.194.438-.12.851-.321 1.223-.592.354-.26.65-.599.866-.992.224-.423.336-.902.325-1.386.01-.478-.105-.95-.33-1.366Zm-2.525 2.212a2.094 2.094 0 0 1-.318.674 1.595 1.595 0 0 1-.55.463c-.245.117-.51.175-.779.169h-.87V7.589h.783c.242 0 .482.047.708.138.219.092.417.233.58.412.18.19.319.417.41.667.102.285.152.588.147.892 0 .27-.037.54-.11.799Z"></path></svg>포스티
                            </span>
                            <div class="sCStatusWrap">
                                <button type="button" class="scStatusBtn-applyBtn">채널 확장 신청</button>
                            </div>
                        </li>
                        <li class="sCSItem">
                            <span class="sCSiteName">
                                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                                    <path
                                        fill="#fff"
                                        d="M2 5.333A3.333 3.333 0 0 1 5.333 2h13.334A3.333 3.333 0 0 1 22 5.333v13.334A3.333 3.333 0 0 1 18.667 22H5.333A3.333 3.333 0 0 1 2 18.667V5.333Z"></path>
                                    <path
                                        fill="#E0E0E4"
                                        fill-rule="evenodd"
                                        d="M18.667 3.25H5.333c-1.15 0-2.083.933-2.083 2.083v13.334c0 1.15.933 2.083 2.083 2.083h13.334c1.15 0 2.083-.933 2.083-2.083V5.333c0-1.15-.933-2.083-2.083-2.083ZM5.333 2A3.333 3.333 0 0 0 2 5.333v13.334A3.333 3.333 0 0 0 5.333 22h13.334A3.333 3.333 0 0 0 22 18.667V5.333A3.333 3.333 0 0 0 18.667 2H5.333Z"
                                        clip-rule="evenodd"></path>
                                    <path
                                        fill="#787887"
                                        d="M12 18.25A6.255 6.255 0 0 0 18.25 12 6.255 6.255 0 0 0 12 5.75 6.255 6.255 0 0 0 5.75 12 6.255 6.255 0 0 0 12 18.25Zm-4.839-3.76 2.54-.02a9.05 9.05 0 0 0 1.402 2.893A5.451 5.451 0 0 1 7.16 14.49Zm3.186-4.204h3.165a8.55 8.55 0 0 1 .02 3.357l-3.185.02a8.283 8.283 0 0 1 0-3.377Zm1.582 6.845a8.092 8.092 0 0 1-1.38-2.661l2.772-.02a8.517 8.517 0 0 1-1.392 2.681Zm.807.262a8.89 8.89 0 0 0 1.421-2.954l2.712-.02a5.457 5.457 0 0 1-4.133 2.974ZM17.443 12c0 .565-.09 1.109-.241 1.613l-2.853.02a9.112 9.112 0 0 0-.02-3.347h2.832A5.36 5.36 0 0 1 17.443 12Zm-.625-2.52h-2.68a9.27 9.27 0 0 0-1.402-2.873 5.42 5.42 0 0 1 4.082 2.873Zm-3.518 0h-2.742a8.328 8.328 0 0 1 1.371-2.611 8.328 8.328 0 0 1 1.371 2.61Zm-2.197-2.843A8.956 8.956 0 0 0 9.722 9.48h-2.54a5.424 5.424 0 0 1 3.92-2.843Zm-1.573 3.65a9.275 9.275 0 0 0-.01 3.376l-2.691.02a5.358 5.358 0 0 1 .01-3.397H9.53Z"></path>
                                    <path
                                        fill="#787887"
                                        fill-rule="evenodd"
                                        d="M5.625 12A6.38 6.38 0 0 1 12 5.625 6.38 6.38 0 0 1 18.375 12 6.38 6.38 0 0 1 12 18.375 6.38 6.38 0 0 1 5.625 12ZM12 5.875A6.13 6.13 0 0 0 5.875 12 6.13 6.13 0 0 0 12 18.125 6.13 6.13 0 0 0 18.125 12 6.13 6.13 0 0 0 12 5.875Zm.463.569.29.039a5.545 5.545 0 0 1 4.177 2.94l.094.182h-2.98l-.027-.09a9.144 9.144 0 0 0-1.382-2.835l-.172-.236Zm-1.08.02-.179.246a8.83 8.83 0 0 0-1.362 2.804l-.025.09H6.975l.096-.182a5.55 5.55 0 0 1 4.011-2.908l.3-.05Zm1.626.314a9.412 9.412 0 0 1 1.221 2.577h2.378a5.295 5.295 0 0 0-3.599-2.577ZM7.393 9.355h2.234a9.054 9.054 0 0 1 1.196-2.536 5.3 5.3 0 0 0-3.43 2.536Zm4.536-2.69.1.127a8.452 8.452 0 0 1 1.39 2.65l.052.163h-3.083l.051-.163a8.452 8.452 0 0 1 1.392-2.65l.098-.127Zm-1.198 2.69h2.397a8.195 8.195 0 0 0-1.199-2.28 8.195 8.195 0 0 0-1.198 2.28Zm-3.982.806h2.932l-.028.149a9.15 9.15 0 0 0-.01 3.331l.026.146-2.93.022-.029-.085a5.483 5.483 0 0 1 .01-3.478l.03-.085Zm.18.25a5.238 5.238 0 0 0-.01 3.147l2.453-.019a9.396 9.396 0 0 1 .009-3.128H6.929Zm3.316-.25h3.369l.02.1a8.678 8.678 0 0 1 .021 3.406l-.02.1-3.39.022-.02-.1a8.41 8.41 0 0 1 0-3.428l.02-.1Zm.204.25a8.16 8.16 0 0 0 0 3.127l2.98-.02a8.427 8.427 0 0 0-.02-3.107h-2.96Zm3.729-.25h3.073l.029.085c.185.547.288 1.145.288 1.754 0 .578-.092 1.134-.247 1.649l-.026.088-3.096.022.027-.148a8.986 8.986 0 0 0-.02-3.301l-.028-.149Zm.3.25a9.232 9.232 0 0 1 .02 3.096l2.61-.018c.132-.469.21-.97.21-1.489 0-.55-.088-1.09-.247-1.589h-2.593Zm2.593 3.882-.09.182a5.582 5.582 0 0 1-4.228 3.042l-.293.04.175-.238a8.764 8.764 0 0 0 1.402-2.912l.024-.092 3.01-.022Zm-2.818.27a9.005 9.005 0 0 1-1.242 2.657 5.333 5.333 0 0 0 3.651-2.674l-2.41.018Zm-.763-.24-.05.163a8.642 8.642 0 0 1-1.411 2.721l-.099.128-.1-.127a8.216 8.216 0 0 1-1.401-2.703l-.048-.159 3.11-.023Zm-2.772.27a7.96 7.96 0 0 0 1.21 2.331 8.386 8.386 0 0 0 1.22-2.348l-2.43.018Zm-.922-.249.026.092a8.923 8.923 0 0 0 1.382 2.853l.179.246-.3-.049a5.576 5.576 0 0 1-4.033-2.938l-.094-.181 2.84-.023Zm-2.425.27a5.33 5.33 0 0 0 3.452 2.567 9.164 9.164 0 0 1-1.216-2.586l-2.236.018Z"
                                        clip-rule="evenodd"></path></svg>지그재그 글로벌
                            </span>
                            <div class="sCStatusWrap">
                                <p class="sCStatusText-completeText">입점 완료</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="dashPanel">
            <div class="panelHeaderWrapper" spacing="auto">
                <div spacing="8" class="box-top-in">
                    <div class="box-top-st" kind="Heading_18_Bold" color="#363644">월간 통계</div>
                </div>
                <div>
                    <div spacing="6" class="css-or56j7">
                        <div width="145" class="css-1h85d8y-StyledSelectWrapper e1r4jbf10">
                            <div
                                class="css-oi7bev-StyledSelectTextWrapper e1r4jbf14"
                                @click="ymSAH == true ? (ymSAH = false) : (ymSAH = true)"
                                ref="dropDateList">
                                <span class="css-1qusm4v-StyledSelectValueText e1r4jbf13">
                                    {{ selectDate }}
                                </span>
                                <svg width="16" height="16" fill="none" viewBox="0 0 16 16" class="css-1wbr6ns-StyledArrowDownIcon e1r4jbf11">
                                    <path fill="#363644" d="M8 11 3.67 6.5h8.66L8 11Z"></path>
                                </svg>
                            </div>
                        </div>
                        <div v-if="ymSAH" style="position: absolute; z-index: 101; width: 145px; transform: translate(0px, 30px)">
                            <div
                                class="css-1b558t-StyledSelectOptionContentWrapper e1vt8ewo1"
                                v-for="(item, index) in dateList"
                                :key="item.val + index"
                                @click="selectYMDate(item.date)">
                                <div class="css-wt96g-StyledMenuItem e1vt8ewo0">{{ item.date }}</div>
                            </div>
                        </div>
                        <button
                            type="button"
                            @click="xlsxDownload"
                            class="pds-button css-1gl5mf8-button_base_css-buildCSSWithMixedColor-buildCSSWithMixedColor-buildCSSWithMixedColor-getButtonStyle-buildCSSWithMixedColor-buildCSSWithMixedColor-buildCSSWithMixedColor-buildCSSWithMixedColor-buildCSSWithMixedColor-buildCSSWithMixedColor-buildCSSWithMixedColor-getButtonStyle-getDefaultButtonStyle-Button-Button">
                            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" class="css-1jh1x96-MonthlyStats">
                                <path fill="#398E3D" d="M2 2h20v20H2V2Z"></path>
                                <path
                                    fill="#fff"
                                    fill-rule="evenodd"
                                    d="M16.5 7.5h-3L12 9.75 10.5 7.5h-3l3 4.5-3 4.5h3l1.5-2.25 1.5 2.25h3l-3-4.5 3-4.5Z"
                                    clip-rule="evenodd"></path></svg>주문 통계 다운로드
                        </button>
                    </div>
                </div>
            </div>
            <div class="css-11l9f26-SalesChannel ezuia903">
                <div spacing="8" class="css-dq3h6z eayv39d0">
                    <div v-for="(item, index) in ccbList" v-show="item.chckSel" :key="index">
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" v-html="item.img"></svg>
                    </div>
                </div>
                <div class="css-14wvgzt-Container ey3bsbg5" ref="ChannelMenuDiv">
                    <div class="css-2c5m1r-Select ey3bsbg4" @click="selectCh == true ? (selectCh = false) : (selectCh = true)">
                        <span class="pastel-ui-text css-14olg5o e1mejzrt0" color="#363644">채널 설정</span
                        ><svg width="16" height="16" fill="none" viewBox="0 0 16 16" class="css-lwhzvw-StyledIconSelectArrow16 ey3bsbg3">
                            <path fill="#363644" d="M8 11 3.67 6.5h8.66L8 11Z"></path>
                        </svg>
                    </div>
                    <div v-if="selectCh" class="css-1s4py71-SelectOptionWrapper ey3bsbg2">
                        <div spacing="4" class="css-dcbj1w-StyledAllChannelOption ey3bsbg1">
                            <label class="css-upy428-StyledInput ersmdni0" id="allCheckChannel">
                                <input for="allCheckChannel" type="checkbox" v-model="chckAllChannel" />
                                <span class="checkmark"></span>
                            </label>
                            <span class="pastel-ui-text css-14olg5o e1mejzrt0" color="#363644">전체 채널 선택</span>
                        </div>
                        <div spacing="4" class="css-fivwxx-StyledOption ey3bsbg0">
                            <div class="css-wpli6t-Container e1jnzood0" v-for="(channel, index) in channelList" :key="index">
                                <div spacing="4" class="css-1t57yb2 e1a5h7hu0">
                                    <label class="css-upy428-StyledInput ersmdni0" :key="index">
                                        <input type="checkbox" v-model="ccbList" :value="channel" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" v-html="channel.img"></svg>
                                    <span class="pastel-ui-text css-1voxopm e1mejzrt0">{{ channel.name }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="css-9zu35e-MenuGroup e7v4mzy1">
                <!-- 수정필요 for문으로 데이터 받아서 li 간결하게 수정할 것-->
                <li
                    :class="[this.currentMT === 'msm00' + (index + 1) ? 'selItem-selItem' : 'selItem']"
                    @click="chgMSM('msm00' + (index + 1))"
                    v-for="(item, index) in monthlyStatsList"
                    :key="index">
                    <div spacing="5" class="css-12724j6 e1a5h7hu0">
                        <span class="pastel-ui-text text0100 e1mejzrt0">{{ item.title }}</span>
                        <div class="hover-icon css-124ql05-StyledHoverIcon e1gz3wmf1" @mouseenter="showTooltip(index + 6)" @mouseleave="hideTooltip">
                            <div class="hover-icon__icon">
                                <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                                    <path
                                        fill="#AAAAB7"
                                        stroke="#AAAAB7"
                                        stroke-width="0.3"
                                        d="M7 3.5c-1.103 0-2 .863-2 1.924 0 .153.129.277.288.277a.282.282 0 0 0 .287-.277c0-.756.64-1.37 1.425-1.37.786 0 1.425.614 1.425 1.37 0 .756-.64 1.371-1.425 1.371a.282.282 0 0 0-.288.277v1.151c0 .153.13.277.288.277a.282.282 0 0 0 .288-.277v-.897C8.254 7.192 9 6.392 9 5.425 9 4.364 8.103 3.5 7 3.5Z"></path>
                                    <path
                                        fill="#AAAAB7"
                                        fill-rule="evenodd"
                                        stroke="#AAAAB7"
                                        stroke-width="0.3"
                                        d="M7 9.5a.5.5 0 1 0 0 1.002A.5.5 0 0 0 7 9.5Z"
                                        clip-rule="evenodd"></path>
                                    <path stroke="#AAAAB7" d="M13.5 7a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z"></path>
                                </svg>
                            </div>
                            <AllToolTips v-show="tooltipOpen == index + 6" :tooltipNum="tooltipNum" />
                        </div>
                    </div>
                    <div spacing="2" class="css-1ch0usm e1a5h7hu0">
                        <span class="pastel-ui-text css-8disbo e1mejzrt0">{{ item.amount }}</span
                        ><span class="pastel-ui-text css-19rn2bl-MenuItem e1mejzrt0">{{ item.unit }}</span>
                    </div>
                </li>
            </ul>
            <div class="css-1fkeq8y exuu7bz0">
                <section class="css-hvwcpz-TopSection ezuia902">
                    <div spacing="8" class="css-dq3h6z eayv39d0">
                        <span class="pds-text css-eluqoo e2vc0tk0" kind="Body_13_Regular" color="#AAAAB7">2023.06.01 ~ 2023.06.30</span
                        ><a class="css-agxzqx-OrderStatsDetailLink ezuia901" href="/shop/momentum-shop/order_stats"
                            >주문 통계 상세
                            <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                                <path
                                    fill="#363644"
                                    fill-rule="evenodd"
                                    d="M14.94 12 7.47 4.53l1.06-1.06L17.06 12l-8.53 8.53-1.06-1.06L14.94 12Z"
                                    clip-rule="evenodd"></path></svg></a>
                    </div>
                    <div spacing="14" class="css-1bsh943 eayv39d0">
                        <div spacing="4" class="css-1ioqd1z eayv39d0">
                            <button class="pds-switch css-pl5klj" role="switch" aria-checked="false">
                                <span aria-hidden="true">OFF</span>
                            </button>
                            <span class="pds-text css-tm0a81 e2vc0tk0" kind="Body_13_Regular" color="#5A5A68">결제 완료만 보기</span>
                        </div>
                        <div spacing="4" class="css-1ioqd1z eayv39d0">
                            <button class="pds-switch css-14x2rnd" role="switch" aria-checked="true">
                                <span aria-hidden="true">ON</span>
                            </button>
                            <span class="pds-text css-tm0a81 e2vc0tk0" kind="Body_13_Regular" color="#5A5A68">직진배송 포함</span>
                        </div>
                    </div>
                </section>
                <section>
                    <BarChart :param="{ date: this.selectDate, selcMenuId: this.currentMT }" />
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import BarChart from "../components/barChart.vue";
import MonthDatePicker from "../components/monthDatePicker.vue";
import "../assets/css/dashBoard.css";
import "../assets/css/tooltip.css";
import "../assets/css/sideBarP.css";
import AllToolTips from "../components/toolTips/AllTooTips.vue";
import junChartData from "../utils/junBarChartData.js";
import julyChartData from "../utils/julyBarChartData.js";
import * as XLSX from "xlsx";

export default {
    data: () => ({
        currentST: "ttm001",
        currentMT: "msm001",
        announCTI: 0,
        tooltipOpen: "",
        chgBgc: "",
        tooltipNum: "",
        CTBool: false,
        ymSAH: false,
        zigzagLoc: "지그재그 한국",
        zigzagLocImg:
            '<path fill="#FA6EE3" d="M2 5.022A3.016 3.016 0 0 1 5.01 2h13.98A3.016 3.016 0 0 1 22 5.022v13.956A3.016 3.016 0 0 1 18.99 22H5.01A3.016 3.016 0 0 1 2 18.978V5.022Z"></path><path fill="#000" d="M8.198 6.5v2.57h3.395L8 17.5h7.802v-2.577h-3.37L16 6.5H8.198Z"></path>',
        todayBoardIndex: "0",
        countryIndex: "0",
        selectCh: false,
        dropLocMenu: "",
        ChannelMenu: "",
        selectDate: "2023년 07월",
        chckAllChannel: true,
        ccbList: [],
        chartParamData: {},
        junChartData: junChartData,
        julyChartData: julyChartData,
    }),

    created() {
        document.addEventListener("click", this.documentClick);
    },
    mounted() {
        this.dropLocMenu = this.$refs.dropLocMenuDiv;
        this.ChannelMenu = this.$refs.ChannelMenuDiv;
        this.dropDate = this.$refs.dropDateList;
        this.selectDate = this.dateList[0].date;
        this.ccbList = this.channelList;
    },
    destroyed() {
        document.removeEventListener("click", this.documentClick);
    },

    computed: {
        chckAllChannel: {
            get: function () {
                return this.channelList.length === this.ccbList.length;
            },
            set: function (e) {
                this.ccbList = e ? this.channelList : [];
            },
        },
    },

    components: {
        BarChart,
        MonthDatePicker,
        AllToolTips,
    },
    props: {
        orderList: {
            type: Array,
            default: () => [
                {
                    name: "주문확인",
                    numberCases: "1456",
                    link: "/CheckOrderPage",
                },
                {
                    name: "배송준비중",
                    numberCases: "14328",
                    link: "",
                },
                {
                    name: "배송중",
                    numberCases: "3248",
                    link: "",
                },
                {
                    name: "배송지연",
                    numberCases: "8263",
                    link: "",
                },
            ],
        },

        cancelList: {
            type: Array,
            default: () => [
                {
                    name: "취소요청",
                    numberCases: "1432",
                },
                {
                    name: "반품요청",
                    numberCases: "1383",
                },
                {
                    name: "반품수거중",
                    numberCases: "438",
                },
                {
                    name: "반품수거완료",
                    numberCases: "0",
                },
            ],
        },

        exchangeList: {
            type: Array,
            default: () => [
                {
                    name: "교환요청",
                    numberCases: "447",
                },
                {
                    name: "교환수거중",
                    numberCases: "589",
                },
                {
                    name: "교환수거완료",
                    numberCases: "830",
                },
                {
                    name: "교환배송준비중",
                    numberCases: "472",
                },
                {
                    name: "교환배송중",
                    numberCases: "552",
                },
            ],
        },

        inquiryList: {
            type: Array,
            default: () => [
                {
                    name: "주문문의 (미답변)",
                    numberCases: "152",
                },
                {
                    name: "상품문의 (미답변)",
                    numberCases: "147",
                },
                {
                    name: "리뷰 (최근1주)",
                    numberCases: "278",
                },
            ],
        },

        countryList: {
            type: Array,
            default: () => [
                {
                    id: "ctNum00",
                    value: "지그재그 한국",
                    tag: '<path fill="#FA6EE3" d="M2 5.022A3.016 3.016 0 0 1 5.01 2h13.98A3.016 3.016 0 0 1 22 5.022v13.956A3.016 3.016 0 0 1 18.99 22H5.01A3.016 3.016 0 0 1 2 18.978V5.022Z"></path><path fill="#000" d="M8.198 6.5v2.57h3.395L8 17.5h7.802v-2.577h-3.37L16 6.5H8.198Z"></path>',
                },
                {
                    id: "ctNum00",
                    value: "지그재그 캐나다",
                    tag: '<path fill="#fff" d="M2 5.333A3.333 3.333 0 0 1 5.333 2h13.334A3.333 3.333 0 0 1 22 5.333v13.334A3.333 3.333 0 0 1 18.667 22H5.333A3.333 3.333 0 0 1 2 18.667V5.333Z"></path><path fill="#D52B1E" d="M2.417 5.333a2.5 2.5 0 0 1 2.5-2.5h.833v18.334h-.833a2.5 2.5 0 0 1-2.5-2.5V5.333ZM21.583 5.333a2.5 2.5 0 0 0-2.5-2.5h-.833v18.334h.833a2.5 2.5 0 0 0 2.5-2.5V5.333ZM12.304 14.523l2.395.256-.21-.639a.28.28 0 0 1 .11-.303L17 12.03l-.497-.216c-.219-.072-.159-.186-.08-.46l.367-1.234-1.395.272c-.136.02-.227-.06-.247-.137l-.18-.58-1.104 1.143c-.156.184-.474.184-.375-.24l.471-2.316-.633.303c-.177.092-.355.107-.453-.057L12 7l-.873 1.508c-.1.164-.277.149-.454.057l-.633-.303.472 2.316c.1.424-.219.424-.376.24L9.033 9.675l-.18.58c-.02.077-.111.157-.247.138L7.21 10.12l.366 1.234c.078.274.139.388-.08.46L7 12.03l2.402 1.806a.279.279 0 0 1 .109.304l-.21.638 2.395-.255c.073 0 .121.037.12.115L11.67 17h.66l-.147-2.36c.001-.08.049-.117.122-.117Z"></path><path fill="#E0E0E4" fill-rule="evenodd" d="M18.667 3.25H5.333c-1.15 0-2.083.933-2.083 2.083v13.334c0 1.15.933 2.083 2.083 2.083h13.334c1.15 0 2.083-.933 2.083-2.083V5.333c0-1.15-.933-2.083-2.083-2.083ZM5.333 2A3.333 3.333 0 0 0 2 5.333v13.334A3.333 3.333 0 0 0 5.333 22h13.334A3.333 3.333 0 0 0 22 18.667V5.333A3.333 3.333 0 0 0 18.667 2H5.333Z" clip-rule="evenodd"></path>',
                },
                {
                    id: "ctNum00",
                    value: "지그재그 일본",
                    tag: '<path fill="#fff" d="M2 5.333A3.333 3.333 0 0 1 5.333 2h13.334A3.333 3.333 0 0 1 22 5.333v13.334A3.333 3.333 0 0 1 18.667 22H5.333A3.333 3.333 0 0 1 2 18.667V5.333Z"></path><path fill="#E0E0E4" fill-rule="evenodd" d="M18.667 3.25H5.333c-1.15 0-2.083.933-2.083 2.083v13.334c0 1.15.933 2.083 2.083 2.083h13.334c1.15 0 2.083-.933 2.083-2.083V5.333c0-1.15-.933-2.083-2.083-2.083ZM5.333 2A3.333 3.333 0 0 0 2 5.333v13.334A3.333 3.333 0 0 0 5.333 22h13.334A3.333 3.333 0 0 0 22 18.667V5.333A3.333 3.333 0 0 0 18.667 2H5.333Z" clip-rule="evenodd"></path><path fill="#BC002D" d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"></path>',
                },
                {
                    id: "ctNum00",
                    value: "지그재그 미국",
                    tag: '<path fill="#fff" d="M2 5.333A3.333 3.333 0 0 1 5.333 2h13.334A3.333 3.333 0 0 1 22 5.333v13.334A3.333 3.333 0 0 1 18.667 22H5.333A3.333 3.333 0 0 1 2 18.667V5.333Z"></path><path fill="#CB001C" fill-rule="evenodd" d="M20.75 16.167H2.833V14.5H20.75v1.667ZM20.75 19.5H2.833v-1.667H20.75V19.5ZM20.75 12.833H2.833v-1.666H20.75v1.666ZM20.75 9.5H2.833V7.833H20.75V9.5ZM20.75 6.167H2.833V4.5H20.75v1.667Z" clip-rule="evenodd"></path><path fill="#2A3560" d="M13.667 2H7.833C4.612 2 2 4.425 2 7.417v5.416h11.667V2Z"></path><path fill="#fff" d="m5.348 5.797-.163-.556-.163.556H4.5l.424.337-.163.556.424-.346.416.346-.155-.556.416-.337h-.514ZM5.185 7.683l.163.556h.514l-.416.346.155.547-.416-.337-.424.337.163-.547L4.5 8.24h.522l.163-.556ZM5.348 10.681l-.163-.547-.163.547H4.5l.424.347-.163.555.424-.346.416.346-.155-.556.416-.346h-.514ZM6.864 4.63l-.155-.547-.163.547h-.522l.424.346-.163.556.424-.346.416.346-.155-.556.416-.346h-.522ZM6.71 6.526l.154.556h.522l-.416.346.155.547-.416-.338-.424.338.163-.547-.424-.346h.522l.163-.556ZM6.864 9.524l-.155-.547-.163.547h-.522l.424.346-.163.556.424-.346.416.346-.155-.556.416-.346h-.522ZM8.25 5.24l.163.557h.522l-.424.337.163.556-.424-.346-.424.346.163-.556-.424-.337h.522l.163-.556ZM8.413 8.24l-.163-.557-.163.556h-.522l.424.346-.163.547.424-.337.424.337-.163-.547.424-.346h-.522ZM8.25 10.134l.163.547h.522l-.424.347.163.555-.424-.346-.424.346.163-.556-.424-.346h.522l.163-.547ZM9.775 4.083l.163.547h.522l-.424.346.163.556-.424-.346-.424.346.163-.556-.424-.346h.522l.163-.547ZM9.938 7.082l-.163-.556-.163.556H9.09l.424.346-.163.547.424-.338.424.338-.163-.547.424-.346h-.522ZM9.775 8.977l.163.547h.522l-.424.346.163.556-.424-.346-.424.346.163-.556-.424-.346h.522l.163-.547ZM11.478 5.797l-.163-.556-.155.556h-.522l.416.337-.155.556.416-.347.424.347-.163-.556.424-.337h-.522ZM11.315 7.683l.163.556H12l-.424.346.163.547-.424-.337-.416.337.155-.547-.416-.346h.522l.155-.556ZM11.478 10.681l-.163-.547-.155.547h-.522l.416.347-.155.555.416-.346.424.346-.163-.556.424-.346h-.522Z"></path><path fill="#E0E0E4" fill-rule="evenodd" d="M18.667 3.25H5.333c-1.15 0-2.083.933-2.083 2.083v13.334c0 1.15.933 2.083 2.083 2.083h13.334c1.15 0 2.083-.933 2.083-2.083V5.333c0-1.15-.933-2.083-2.083-2.083ZM5.333 2A3.333 3.333 0 0 0 2 5.333v13.334A3.333 3.333 0 0 0 5.333 22h13.334A3.333 3.333 0 0 0 22 18.667V5.333A3.333 3.333 0 0 0 18.667 2H5.333Z" clip-rule="evenodd"></path>',
                },
            ],
        },

        todayTabMenuList: {
            type: Array,
            default: () => [
                {
                    id: "ttm002",
                    value: "패션 바이 카카오",
                    img: '<svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="#FAE100" d="M2 5.022A3.016 3.016 0 0 1 5.01 2h13.98A3.016 3.016 0 0 1 22 5.022v13.956A3.016 3.016 0 0 1 18.99 22H5.01A3.016 3.016 0 0 1 2 18.978V5.022Z"></path><path fill="#E62F71" d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z"></path><path fill="#FFE500" d="m16.652 13.409-4.834-3.55c-.666-.52-.654-.797-.642-1.088a.97.97 0 0 1 .112-.39c.064-.122.154-.23.264-.317a1.064 1.064 0 0 1 .794-.224c.142.016.278.06.401.128.123.069.23.16.315.27a.96.96 0 0 1 .19.771.384.384 0 0 0 .063.299.431.431 0 0 0 .577.107.397.397 0 0 0 .176-.254 1.724 1.724 0 0 0-.004-.739 1.762 1.762 0 0 0-.313-.675 1.852 1.852 0 0 0-.571-.498 1.962 1.962 0 0 0-1.501-.171c-.25.072-.48.193-.678.355a1.81 1.81 0 0 0-.47.586 1.736 1.736 0 0 0-.186.717c-.024.489.034 1.028.956 1.747l4.778 3.493c.1.102.055.216-.048.216H7.999c-.107 0-.15-.114-.049-.216l3.062-2.236a.387.387 0 0 0 .033-.529.433.433 0 0 0-.545-.094L7.373 13.41a.928.928 0 0 0-.338.487.89.89 0 0 0 .034.584c.08.164.21.301.373.394a.978.978 0 0 0 .54.124h8.031a.981.981 0 0 0 .54-.125.92.92 0 0 0 .373-.393.893.893 0 0 0 .047-.579.927.927 0 0 0-.32-.492Z"></path></svg>',
                },
                {
                    id: "ttm002",
                    value: "마이스토어",
                    img: '<svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="#FA7840" d="M18.667 2H5.333A3.333 3.333 0 0 0 2 5.333v13.334A3.333 3.333 0 0 0 5.333 22h13.334A3.333 3.333 0 0 0 22 18.667V5.333A3.333 3.333 0 0 0 18.667 2Z"></path><path fill="#fff" d="M19.902 8.084h-1.443a.117.117 0 0 0-.111.077l-.245.716c-.452 1.277-.923 2.619-1.745 2.619a.366.366 0 0 1-.153-.03.305.305 0 0 1-.064-.04.404.404 0 0 1-.136-.271 1.34 1.34 0 0 1 .008-.358c.02-.149.052-.296.09-.442.043-.166.094-.33.149-.492.057-.17.119-.339.183-.506a20.388 20.388 0 0 1 .374-.91l.054-.126.044-.102c.027-.064-.023-.135-.096-.135h-1.447a.118.118 0 0 0-.11.071l-.032.08c-.217.512-.272.646-.598 1.53-.22.596-.448 1.043-.84 1.552-.35.454-.77.784-1.2.879a.495.495 0 0 1-.144.012c-.22-.017-.36-.185-.313-.388.067-.285.288-.6.472-.92.32-.609.645-1.157.628-1.727 0-.68-.519-1.173-1.233-1.173-.6 0-1.371.295-1.978 1.208-.033.05-.115.019-.103-.04.068-.319.108-.578-.018-.812-.203-.38-.745-.362-.89-.347-.326.032-.713.141-1.215.57-.123.105-.305.32-.512.577l-.001.001-.016.019a.25.25 0 0 1-.051.047.106.106 0 0 1-.02.007.065.065 0 0 1-.07-.023l-.003-.003c-.02-.046.03-.095.029-.095.298-.354.468-.805.494-.97.005-.03-.017-.053-.048-.053H6.005a.097.097 0 0 0-.093.063l-1.907 5.377c-.021.06.026.123.093.123H5.51a.117.117 0 0 0 .113-.08l.079-.241c.863-2.686 1.576-3.751 2.35-3.796.078-.004.17.02.215.084.051.072.056.166.054.25a1.93 1.93 0 0 1-.048.358c-.046.19-.11.407-.182.63l-.953 2.609-.023.062c-.023.06.024.124.092.124h1.4a.117.117 0 0 0 .112-.079l.026-.078c.379-1.106 1.343-3.962 2.467-3.962.067 0 .243 0 .243.272 0 .246-.198.575-.412.97-.268.493-.543.95-.585 1.47-.07.858.515 1.407 1.383 1.458.655.04 1.6-.378 2.295-1.136.096-.105.216-.264.318-.394a.048.048 0 0 1 .079.007c.026.05.054.096.086.141.238.337.643.508 1.204.508.35 0 .717-.115 1.02-.313.038-.025.087.01.072.051l-.163.444a.048.048 0 0 1-.04.03c-1.072.108-2.054.373-2.768.748-.898.472-1.353 1.086-1.353 1.827 0 .958.931 1.396 1.853 1.387 1.555-.015 2.825-1.126 3.494-3.044.33-.948.659-1.837.965-2.7l1.09-3.049c.022-.06-.025-.123-.092-.123Zm-3.621 6.22c-.477.912-1.095 1.432-1.71 1.432-.188 0-.412-.054-.412-.311 0-.213.22-.471.589-.692.39-.234.913-.408 1.483-.494.038-.005.066.032.05.064Z"></path></svg>',
                },
            ],
        },

        channelList: {
            type: Array,
            default: () => [
                {
                    val: "chN00",
                    name: "지그재그",
                    chckSel: true,
                    img: '<path fill="#FA6EE3" d="M2 5.022A3.016 3.016 0 0 1 5.01 2h13.98A3.016 3.016 0 0 1 22 5.022v13.956A3.016 3.016 0 0 1 18.99 22H5.01A3.016 3.016 0 0 1 2 18.978V5.022Z"></path><path fill="#000" d="M8.198 6.5v2.57h3.395L8 17.5h7.802v-2.577h-3.37L16 6.5H8.198Z"></path>',
                },
                {
                    val: "chN00",
                    name: "패션 바이 카카오",
                    chckSel: true,
                    img: '<path fill="#FAE100"d="M2 5.022A3.016 3.016 0 0 1 5.01 2h13.98A3.016 3.016 0 0 1 22 5.022v13.956A3.016 3.016 0 0 1 18.99 22H5.01A3.016 3.016 0 0 1 2 18.978V5.022Z"></path><path fill="#E62F71" d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z"></path><path fill="#FFE500" d="m16.652 13.409-4.834-3.55c-.666-.52-.654-.797-.642-1.088a.97.97 0 0 1 .112-.39c.064-.122.154-.23.264-.317a1.064 1.064 0 0 1 .794-.224c.142.016.278.06.401.128.123.069.23.16.315.27a.96.96 0 0 1 .19.771.384.384 0 0 0 .063.299.431.431 0 0 0 .577.107.397.397 0 0 0 .176-.254 1.724 1.724 0 0 0-.004-.739 1.762 1.762 0 0 0-.313-.675 1.852 1.852 0 0 0-.571-.498 1.962 1.962 0 0 0-1.501-.171c-.25.072-.48.193-.678.355a1.81 1.81 0 0 0-.47.586 1.736 1.736 0 0 0-.186.717c-.024.489.034 1.028.956 1.747l4.778 3.493c.1.102.055.216-.048.216H7.999c-.107 0-.15-.114-.049-.216l3.062-2.236a.387.387 0 0 0 .033-.529.433.433 0 0 0-.545-.094L7.373 13.41a.928.928 0 0 0-.338.487.89.89 0 0 0 .034.584c.08.164.21.301.373.394a.978.978 0 0 0 .54.124h8.031a.981.981 0 0 0 .54-.125.92.92 0 0 0 .373-.393.893.893 0 0 0 .047-.579.927.927 0 0 0-.32-.492Z"></path>',
                },
                {
                    val: "chN00",
                    name: "마이스토어",
                    chckSel: true,
                    img: '<path fill="#FA7840" d="M18.667 2H5.333A3.333 3.333 0 0 0 2 5.333v13.334A3.333 3.333 0 0 0 5.333 22h13.334A3.333 3.333 0 0 0 22 18.667V5.333A3.333 3.333 0 0 0 18.667 2Z"></path><path fill="#fff" d="M19.902 8.084h-1.443a.117.117 0 0 0-.111.077l-.245.716c-.452 1.277-.923 2.619-1.745 2.619a.366.366 0 0 1-.153-.03.305.305 0 0 1-.064-.04.404.404 0 0 1-.136-.271 1.34 1.34 0 0 1 .008-.358c.02-.149.052-.296.09-.442.043-.166.094-.33.149-.492.057-.17.119-.339.183-.506a20.388 20.388 0 0 1 .374-.91l.054-.126.044-.102c.027-.064-.023-.135-.096-.135h-1.447a.118.118 0 0 0-.11.071l-.032.08c-.217.512-.272.646-.598 1.53-.22.596-.448 1.043-.84 1.552-.35.454-.77.784-1.2.879a.495.495 0 0 1-.144.012c-.22-.017-.36-.185-.313-.388.067-.285.288-.6.472-.92.32-.609.645-1.157.628-1.727 0-.68-.519-1.173-1.233-1.173-.6 0-1.371.295-1.978 1.208-.033.05-.115.019-.103-.04.068-.319.108-.578-.018-.812-.203-.38-.745-.362-.89-.347-.326.032-.713.141-1.215.57-.123.105-.305.32-.512.577l-.001.001-.016.019a.25.25 0 0 1-.051.047.106.106 0 0 1-.02.007.065.065 0 0 1-.07-.023l-.003-.003c-.02-.046.03-.095.029-.095.298-.354.468-.805.494-.97.005-.03-.017-.053-.048-.053H6.005a.097.097 0 0 0-.093.063l-1.907 5.377c-.021.06.026.123.093.123H5.51a.117.117 0 0 0 .113-.08l.079-.241c.863-2.686 1.576-3.751 2.35-3.796.078-.004.17.02.215.084.051.072.056.166.054.25a1.93 1.93 0 0 1-.048.358c-.046.19-.11.407-.182.63l-.953 2.609-.023.062c-.023.06.024.124.092.124h1.4a.117.117 0 0 0 .112-.079l.026-.078c.379-1.106 1.343-3.962 2.467-3.962.067 0 .243 0 .243.272 0 .246-.198.575-.412.97-.268.493-.543.95-.585 1.47-.07.858.515 1.407 1.383 1.458.655.04 1.6-.378 2.295-1.136.096-.105.216-.264.318-.394a.048.048 0 0 1 .079.007c.026.05.054.096.086.141.238.337.643.508 1.204.508.35 0 .717-.115 1.02-.313.038-.025.087.01.072.051l-.163.444a.048.048 0 0 1-.04.03c-1.072.108-2.054.373-2.768.748-.898.472-1.353 1.086-1.353 1.827 0 .958.931 1.396 1.853 1.387 1.555-.015 2.825-1.126 3.494-3.044.33-.948.659-1.837.965-2.7l1.09-3.049c.022-.06-.025-.123-.092-.123Zm-3.621 6.22c-.477.912-1.095 1.432-1.71 1.432-.188 0-.412-.054-.412-.311 0-.213.22-.471.589-.692.39-.234.913-.408 1.483-.494.038-.005.066.032.05.064Z"></path>',
                },
                {
                    val: "chN00",
                    name: "지그재그 캐나다",
                    chckSel: true,
                    img: '<path fill="#fff" d="M2 5.333A3.333 3.333 0 0 1 5.333 2h13.334A3.333 3.333 0 0 1 22 5.333v13.334A3.333 3.333 0 0 1 18.667 22H5.333A3.333 3.333 0 0 1 2 18.667V5.333Z"></path><path fill="#D52B1E" d="M2.417 5.333a2.5 2.5 0 0 1 2.5-2.5h.833v18.334h-.833a2.5 2.5 0 0 1-2.5-2.5V5.333ZM21.583 5.333a2.5 2.5 0 0 0-2.5-2.5h-.833v18.334h.833a2.5 2.5 0 0 0 2.5-2.5V5.333ZM12.304 14.523l2.395.256-.21-.639a.28.28 0 0 1 .11-.303L17 12.03l-.497-.216c-.219-.072-.159-.186-.08-.46l.367-1.234-1.395.272c-.136.02-.227-.06-.247-.137l-.18-.58-1.104 1.143c-.156.184-.474.184-.375-.24l.471-2.316-.633.303c-.177.092-.355.107-.453-.057L12 7l-.873 1.508c-.1.164-.277.149-.454.057l-.633-.303.472 2.316c.1.424-.219.424-.376.24L9.033 9.675l-.18.58c-.02.077-.111.157-.247.138L7.21 10.12l.366 1.234c.078.274.139.388-.08.46L7 12.03l2.402 1.806a.279.279 0 0 1 .109.304l-.21.638 2.395-.255c.073 0 .121.037.12.115L11.67 17h.66l-.147-2.36c.001-.08.049-.117.122-.117Z"></path><path fill="#E0E0E4" fill-rule="evenodd" d="M18.667 3.25H5.333c-1.15 0-2.083.933-2.083 2.083v13.334c0 1.15.933 2.083 2.083 2.083h13.334c1.15 0 2.083-.933 2.083-2.083V5.333c0-1.15-.933-2.083-2.083-2.083ZM5.333 2A3.333 3.333 0 0 0 2 5.333v13.334A3.333 3.333 0 0 0 5.333 22h13.334A3.333 3.333 0 0 0 22 18.667V5.333A3.333 3.333 0 0 0 18.667 2H5.333Z" clip-rule="evenodd"></path>',
                },
                {
                    val: "chN00",
                    name: "지그재그 일본",
                    chckSel: true,
                    img: '<path fill="#fff" d="M2 5.333A3.333 3.333 0 0 1 5.333 2h13.334A3.333 3.333 0 0 1 22 5.333v13.334A3.333 3.333 0 0 1 18.667 22H5.333A3.333 3.333 0 0 1 2 18.667V5.333Z"></path><path fill="#E0E0E4" fill-rule="evenodd" d="M18.667 3.25H5.333c-1.15 0-2.083.933-2.083 2.083v13.334c0 1.15.933 2.083 2.083 2.083h13.334c1.15 0 2.083-.933 2.083-2.083V5.333c0-1.15-.933-2.083-2.083-2.083ZM5.333 2A3.333 3.333 0 0 0 2 5.333v13.334A3.333 3.333 0 0 0 5.333 22h13.334A3.333 3.333 0 0 0 22 18.667V5.333A3.333 3.333 0 0 0 18.667 2H5.333Z" clip-rule="evenodd"></path><path fill="#BC002D" d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"></path>',
                },
                {
                    val: "chN00",
                    name: "지그재그 미국",
                    chckSel: true,
                    img: '<path fill="#fff" d="M2 5.333A3.333 3.333 0 0 1 5.333 2h13.334A3.333 3.333 0 0 1 22 5.333v13.334A3.333 3.333 0 0 1 18.667 22H5.333A3.333 3.333 0 0 1 2 18.667V5.333Z"></path><path fill="#CB001C" fill-rule="evenodd" d="M20.75 16.167H2.833V14.5H20.75v1.667ZM20.75 19.5H2.833v-1.667H20.75V19.5ZM20.75 12.833H2.833v-1.666H20.75v1.666ZM20.75 9.5H2.833V7.833H20.75V9.5ZM20.75 6.167H2.833V4.5H20.75v1.667Z" clip-rule="evenodd"></path><path fill="#2A3560" d="M13.667 2H7.833C4.612 2 2 4.425 2 7.417v5.416h11.667V2Z"></path><path fill="#fff" d="m5.348 5.797-.163-.556-.163.556H4.5l.424.337-.163.556.424-.346.416.346-.155-.556.416-.337h-.514ZM5.185 7.683l.163.556h.514l-.416.346.155.547-.416-.337-.424.337.163-.547L4.5 8.24h.522l.163-.556ZM5.348 10.681l-.163-.547-.163.547H4.5l.424.347-.163.555.424-.346.416.346-.155-.556.416-.346h-.514ZM6.864 4.63l-.155-.547-.163.547h-.522l.424.346-.163.556.424-.346.416.346-.155-.556.416-.346h-.522ZM6.71 6.526l.154.556h.522l-.416.346.155.547-.416-.338-.424.338.163-.547-.424-.346h.522l.163-.556ZM6.864 9.524l-.155-.547-.163.547h-.522l.424.346-.163.556.424-.346.416.346-.155-.556.416-.346h-.522ZM8.25 5.24l.163.557h.522l-.424.337.163.556-.424-.346-.424.346.163-.556-.424-.337h.522l.163-.556ZM8.413 8.24l-.163-.557-.163.556h-.522l.424.346-.163.547.424-.337.424.337-.163-.547.424-.346h-.522ZM8.25 10.134l.163.547h.522l-.424.347.163.555-.424-.346-.424.346.163-.556-.424-.346h.522l.163-.547ZM9.775 4.083l.163.547h.522l-.424.346.163.556-.424-.346-.424.346.163-.556-.424-.346h.522l.163-.547ZM9.938 7.082l-.163-.556-.163.556H9.09l.424.346-.163.547.424-.338.424.338-.163-.547.424-.346h-.522ZM9.775 8.977l.163.547h.522l-.424.346.163.556-.424-.346-.424.346.163-.556-.424-.346h.522l.163-.547ZM11.478 5.797l-.163-.556-.155.556h-.522l.416.337-.155.556.416-.347.424.347-.163-.556.424-.337h-.522ZM11.315 7.683l.163.556H12l-.424.346.163.547-.424-.337-.416.337.155-.547-.416-.346h.522l.155-.556ZM11.478 10.681l-.163-.547-.155.547h-.522l.416.347-.155.555.416-.346.424.346-.163-.556.424-.346h-.522Z"></path><path fill="#E0E0E4" fill-rule="evenodd" d="M18.667 3.25H5.333c-1.15 0-2.083.933-2.083 2.083v13.334c0 1.15.933 2.083 2.083 2.083h13.334c1.15 0 2.083-.933 2.083-2.083V5.333c0-1.15-.933-2.083-2.083-2.083ZM5.333 2A3.333 3.333 0 0 0 2 5.333v13.334A3.333 3.333 0 0 0 5.333 22h13.334A3.333 3.333 0 0 0 22 18.667V5.333A3.333 3.333 0 0 0 18.667 2H5.333Z" clip-rule="evenodd"></path>',
                },
            ],
        },

        dateList: {
            type: Array,
            default: () => [
                {
                    val: "dateNum00",
                    date: "2023년 07월",
                },
                {
                    val: "dateNum00",
                    date: "2023년 06월",
                },
            ],
        },

        monthlyStatsList: {
            type: Array,
            default: () => [
                {
                    title: "주문금액",
                    amount: "81,382,950",
                    unit: "원",
                },
                {
                    title: "주문수",
                    amount: "2,676",
                    unit: "건",
                },
                {
                    title: "상품클릭",
                    amount: "274,743",
                    unit: "회",
                },
                {
                    title: "상품 찜",
                    amount: "+31,798",
                    unit: "개",
                },
                {
                    title: "방문자",
                    amount: "233,577",
                    unit: "명",
                },
                {
                    title: "즐겨찾기",
                    amount: "+4,576",
                    unit: "명",
                },
            ],
        },
        todayBoardMenuList: {
            type: Array,
            default: () => [
                [
                    //한국
                    {
                        title: "현재 랭킹",
                        amount: "138",
                        unit: "위",
                        img: '<svg width="10" height="10" fill="none" viewBox="0 0 24 24" class="styledIconArrowIncrease10"><path fill="#23AE50" fill-rule="evenodd" d="M12 2 4 14.5h5.333V22h5.334v-7.5H20L12 2Z" clip-rule="evenodd"></path></svg><span class="scIncrease" kind="Body_12_SemiBold" color="#23AE50">5위</span><span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">어제 대비</span>',
                        smallAmount: "5위",
                        smallTxt: "어제 대비",
                    },
                    {
                        title: "현재 즐겨찾기",
                        amount: "36,828",
                        unit: "개",
                        img: '<svg width="10" height="10" fill="none" viewBox="0 0 24 24" class="styledIconArrowIncrease10"><path fill="#23AE50" fill-rule="evenodd" d="M12 2 4 14.5h5.333V22h5.334v-7.5H20L12 2Z" clip-rule="evenodd"></path></svg><span class="scIncrease" kind="Body_12_SemiBold" color="#23AE50">278개</span><span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">어제대비</span>',
                        smallAmount: "278개",
                        smallTxt: "어제 대비",
                    },
                    {
                        title: "어제 방문자",
                        amount: "12,940",
                        unit: "명",
                        img: '<svg width="10" height="10" fill="none" viewBox="0 0 24 24" class="StlyedIconArrowDecrease10"><path fill="#F05046" fill-rule="evenodd" d="m12 22 8-12.5h-5.333V2H9.333v7.5H4L12 22Z" clip-rule="evenodd"></path></svg><span class="scDecrease" kind="Body_12_SemiBold" color="#23AE50">1,010명</span><span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">그저께 대비</span>',
                        smallAmount: "1,010명",
                        smallTxt: "그저께 대비",
                    },
                    {
                        title: "어제 주문금액",
                        amount: "5,044,140",
                        unit: "원",
                        img: '<svg width="10" height="10" fill="none" viewBox="0 0 24 24" class="StlyedIconArrowDecrease10"><path fill="#F05046" fill-rule="evenodd" d="m12 22 8-12.5h-5.333V2H9.333v7.5H4L12 22Z" clip-rule="evenodd"></path></svg><span class="scDecrease" kind="Body_12_SemiBold" color="#23AE50">1,259,800원</span><span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">그저께 대비</span>',
                        smallAmount: "1,259,800원",
                        smallTxt: "그저께 대비",
                    },
                    {
                        title: "어제 주문수",
                        amount: "193",
                        unit: "건",
                        img: '<svg width="10" height="10" fill="none" viewBox="0 0 24 24" class="StlyedIconArrowDecrease10"><path fill="#F05046" fill-rule="evenodd" d="m12 22 8-12.5h-5.333V2H9.333v7.5H4L12 22Z" clip-rule="evenodd"></path></svg><span class="scDecrease" kind="Body_12_SemiBold" color="#23AE50">7건</span><span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">그저께 대비</span>',
                        smallAmount: "7건",
                        smallTxt: "그저께 대비",
                    },
                    {
                        title: "어제 상품클릭",
                        amount: "15,432",
                        unit: "회",
                        img: '<svg width="10" height="10" fill="none" viewBox="0 0 24 24" class="StlyedIconArrowDecrease10"><path fill="#F05046" fill-rule="evenodd" d="m12 22 8-12.5h-5.333V2H9.333v7.5H4L12 22Z" clip-rule="evenodd"></path></svg><span class="scDecrease" kind="Body_12_SemiBold" color="#23AE50">1,464회</span><span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">그저께 대비</span>',
                        smallAmount: "1,464회",
                        smallTxt: "그저께 대비",
                    },
                ],
                [
                    //캐나다
                    {
                        title: "현재 랭킹",
                        amount: "132",
                        unit: "위",
                        img: '<svg width="10" height="10" fill="none" viewBox="0 0 24 24" class="StlyedIconArrowDecrease10"><path fill="#F05046" fill-rule="evenodd" d="m12 22 8-12.5h-5.333V2H9.333v7.5H4L12 22Z" clip-rule="evenodd"></path></svg><span class="scDecrease" kind="Body_12_SemiBold" color="#23AE50">16위</span><span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">어제 대비</span>',
                        smallAmount: "16위",
                        smallTxt: "어제 대비",
                    },
                    {
                        title: "현재 즐겨찾기",
                        amount: "0",
                        unit: "개",
                        img: '<span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">변동 없음</span>',
                        smallAmount: "",
                        smallTxt: "변동 없음",
                    },
                    {
                        title: "어제 방문자",
                        amount: "0",
                        unit: "명",
                        img: '<span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">변동 없음</span>',
                        smallAmount: "",
                        smallTxt: "변동 없음",
                    },
                    {
                        title: "어제 주문금액",
                        amount: "0",
                        unit: "원",
                        img: '<span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">변동 없음</span>',
                        smallAmount: "",
                        smallTxt: "변동 없음",
                    },
                    {
                        title: "어제 주문수",
                        amount: "0",
                        unit: "건",
                        img: '<span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">변동 없음</span>',
                        smallAmount: "",
                        smallTxt: "변동 없음",
                    },
                    {
                        title: "어제 상품클릭",
                        amount: "0",
                        unit: "회",
                        img: '<span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">변동 없음</span>',
                        smallAmount: "",
                        smallTxt: "변동 없음",
                    },
                ],
                [
                    //일본
                    {
                        title: "현재 랭킹",
                        amount: "132",
                        unit: "위",
                        img: '<svg width="10" height="10" fill="none" viewBox="0 0 24 24" class="styledIconArrowIncrease10"><path fill="#23AE50" fill-rule="evenodd" d="M12 2 4 14.5h5.333V22h5.334v-7.5H20L12 2Z" clip-rule="evenodd"></path></svg><span class="scIncrease" kind="Body_12_SemiBold" color="#23AE50">156위</span><span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">어제 대비</span>',
                        smallAmount: "16위",
                        smallTxt: "어제 대비",
                    },
                    {
                        title: "현재 즐겨찾기",
                        amount: "5",
                        unit: "개",
                        img: '<span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">변동 없음</span>',
                        smallAmount: "",
                        smallTxt: "변동 없음",
                    },
                    {
                        title: "어제 방문자",
                        amount: "0",
                        unit: "명",
                        img: '<span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">변동 없음</span>',
                        smallAmount: "",
                        smallTxt: "변동 없음",
                    },
                    {
                        title: "어제 주문금액",
                        amount: "0",
                        unit: "원",
                        img: '<span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">변동 없음</span>',
                        smallAmount: "",
                        smallTxt: "변동 없음",
                    },
                    {
                        title: "어제 주문수",
                        amount: "0",
                        unit: "건",
                        img: '<span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">변동 없음</span>',
                        smallAmount: "",
                        smallTxt: "변동 없음",
                    },
                    {
                        title: "어제 상품클릭",
                        amount: "0",
                        unit: "회",
                        img: '<span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">변동 없음</span>',
                        smallAmount: "",
                        smallTxt: "변동 없음",
                    },
                ],
                [
                    //미국
                    {
                        title: "현재 랭킹",
                        amount: "132",
                        unit: "위",
                        img: '<svg width="10" height="10" fill="none" viewBox="0 0 24 24" class="StlyedIconArrowDecrease10"><path fill="#F05046" fill-rule="evenodd" d="m12 22 8-12.5h-5.333V2H9.333v7.5H4L12 22Z" clip-rule="evenodd"></path></svg><span class="scDecrease" kind="Body_12_SemiBold" color="#23AE50">17위</span><span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">어제 대비</span>',
                        smallAmount: "16위",
                        smallTxt: "어제 대비",
                    },
                    {
                        title: "현재 즐겨찾기",
                        amount: "9",
                        unit: "개",
                        img: '<span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">변동 없음</span>',
                        smallAmount: "",
                        smallTxt: "변동 없음",
                    },
                    {
                        title: "어제 방문자",
                        amount: "0",
                        unit: "명",
                        img: '<span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">변동 없음</span>',
                        smallAmount: "",
                        smallTxt: "변동 없음",
                    },
                    {
                        title: "어제 주문금액",
                        amount: "0",
                        unit: "원",
                        img: '<span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">변동 없음</span>',
                        smallAmount: "",
                        smallTxt: "변동 없음",
                    },
                    {
                        title: "어제 주문수",
                        amount: "0",
                        unit: "건",
                        img: '<span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">변동 없음</span>',
                        smallAmount: "",
                        smallTxt: "변동 없음",
                    },
                    {
                        title: "어제 상품클릭",
                        amount: "0",
                        unit: "회",
                        img: '<span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">변동 없음</span>',
                        smallAmount: "",
                        smallTxt: "변동 없음",
                    },
                ],
                [
                    //패션 바이 카카오
                    {
                        title: "현재 랭킹",
                        amount: "4,713",
                        unit: "위",
                        img: '<svg width="10" height="10" fill="none" viewBox="0 0 24 24" class="StlyedIconArrowDecrease10"><path fill="#F05046" fill-rule="evenodd" d="m12 22 8-12.5h-5.333V2H9.333v7.5H4L12 22Z" clip-rule="evenodd"></path></svg><span class="scDecrease" kind="Body_12_SemiBold" color="#23AE50">17위</span><span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">어제 대비</span>',
                        smallAmount: "788위",
                        smallTxt: "어제 대비",
                    },
                    {
                        title: "현재 즐겨찾기",
                        amount: "9",
                        unit: "개",
                        img: '<span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">변동 없음</span>',
                        smallAmount: "",
                        smallTxt: "변동 없음",
                    },
                    {
                        title: "어제 방문자",
                        amount: "0",
                        unit: "명",
                        img: '<svg width="10" height="10" fill="none" viewBox="0 0 24 24" class="StlyedIconArrowDecrease10"><path fill="#F05046" fill-rule="evenodd" d="m12 22 8-12.5h-5.333V2H9.333v7.5H4L12 22Z" clip-rule="evenodd"></path></svg><span class="scDecrease" kind="Body_12_SemiBold" color="#23AE50">2명</span><span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">그저께 대비</span>',
                        smallAmount: "2명",
                        smallTxt: "그저께 대비",
                    },
                    {
                        title: "어제 주문금액",
                        amount: "0",
                        unit: "원",
                        img: '<span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">변동 없음</span>',
                        smallAmount: "",
                        smallTxt: "변동 없음",
                    },
                    {
                        title: "어제 주문수",
                        amount: "0",
                        unit: "건",
                        img: '<span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">변동 없음</span>',
                        smallAmount: "",
                        smallTxt: "변동 없음",
                    },
                    {
                        title: "어제 상품클릭",
                        amount: "0",
                        unit: "회",
                        img: '<svg width="10" height="10" fill="none" viewBox="0 0 24 24" class="StlyedIconArrowDecrease10"><path fill="#F05046" fill-rule="evenodd" d="m12 22 8-12.5h-5.333V2H9.333v7.5H4L12 22Z" clip-rule="evenodd"></path></svg><span class="scDecrease" kind="Body_12_SemiBold" color="#23AE50">3회</span><span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">그저께 대비</span>',
                        smallAmount: "3회",
                        smallTxt: "그저께 대비",
                    },
                ],
                [
                    //마이스토어
                    {
                        title: "현재 랭킹",
                        amount: "138",
                        unit: "위",
                        img: '<svg width="10" height="10" fill="none" viewBox="0 0 24 24" class="StlyedIconArrowDecrease10"><path fill="#F05046" fill-rule="evenodd" d="m12 22 8-12.5h-5.333V2H9.333v7.5H4L12 22Z" clip-rule="evenodd"></path></svg><span class="scDecrease" kind="Body_12_SemiBold" color="#23AE50">5위</span><span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">어제 대비</span>',
                        smallAmount: "5위위",
                        smallTxt: "어제 대비",
                    },
                    {
                        title: "현재 즐겨찾기",
                        amount: "9",
                        unit: "개",
                        img: '<span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">변동 없음</span>',
                        smallAmount: "",
                        smallTxt: "변동 없음",
                    },
                    {
                        title: "어제 방문자",
                        amount: "0",
                        unit: "명",
                        img: '<span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">변동 없음</span>',
                        smallAmount: "",
                        smallTxt: "변동 없음",
                    },
                    {
                        title: "어제 주문금액",
                        amount: "0",
                        unit: "원",
                        img: '<span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">변동 없음</span>',
                        smallAmount: "",
                        smallTxt: "변동 없음",
                    },
                    {
                        title: "어제 주문수",
                        amount: "0",
                        unit: "건",
                        img: '<span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">변동 없음</span>',
                        smallAmount: "",
                        smallTxt: "변동 없음",
                    },
                    {
                        title: "어제 상품클릭",
                        amount: "0",
                        unit: "회",
                        img: '<span class="cau0100" kind="Body_12_Regular" color="#AAAAB7">변동 없음</span>',
                        smallAmount: "",
                        smallTxt: "변동 없음",
                    },
                ],
            ],
        },
    },

    methods: {
        chgSTM(val) {
            var selColor = "rgb(255, 255, 255)";
            var notSelColor = "rgb(250, 250, 252)";

            if (val == "ttm001") {
                this.currentST = val;
                this.todayBoardIndex = this.countryIndex;
                if (this.chgBgc != selColor) {
                    this.chgBgc = selColor;
                }
            }
            if (val == "ttm002") {
                this.currentST = val;
                this.todayBoardIndex = 4;
                if (this.chgBgc != notSelColor) {
                    this.chgBgc = notSelColor;
                }
            }
            if (val == "ttm003") {
                this.currentST = val;
                this.todayBoardIndex = 5;
                if (this.chgBgc != notSelColor) {
                    this.chgBgc = notSelColor;
                }
            }
        },
        chgMSM(val) {
            if (val == "msm001") {
                this.currentMT = val;
            }
            if (val == "msm002") {
                this.currentMT = val;
            }
            if (val == "msm003") {
                this.currentMT = val;
            }
            if (val == "msm004") {
                this.currentMT = val;
            }
            if (val == "msm005") {
                this.currentMT = val;
            }
            if (val == "msm006") {
                this.currentMT = val;
            }
        },
        chgAnnounTab(catInd) {
            catInd === 0 ? (this.announCTI = 0) : (this.announCTI = 1);
        },
        todayDate() {
            return this.$formattingToday();
        },
        showTooltip(i) {
            this.tooltipNum = "dashBoard00" + i;
            this.tooltipOpen = i;
        },
        hideTooltip() {
            this.tooltipOpen = false;
            this.tooltipNum = "";
        },
        selectLoc(item) {
            this.zigzagLoc = item.loc;
            this.zigzagLocImg = item.img;
            this.todayBoardIndex = item.index;
            this.countryIndex = item.index;
            if (this.CTBool) {
                this.CTBool = false;
            }
        },
        selectYMDate(item) {
            this.selectDate = item;
            if (this.ymSAH) {
                this.ymSAH = false;
            }
        },
        documentClick(e) {
            let target = e.target;
            if (this.dropLocMenu !== target && !this.dropLocMenu.contains(target)) {
                this.CTBool = false;
            }
            if (this.ChannelMenu !== target && !this.ChannelMenu.contains(target)) {
                this.selectCh = false;
            }
            if (this.dropDate !== target && !this.dropDate.contains(target)) {
                this.ymSAH = false;
            }
        },
        xlsxDownload() {
            const excel = [];
			const workBook = XLSX.utils.book_new();
			if(this.selectDate == '2023년 07월'){
				for(let j in this.julyChartData[0].datasets){
					for (let i in this.julyChartData[0].datasets[0].data) {
						const excelLogs = {
							일자: "",
							주문액: "",
							주문수: "",
							상품상제페이지방문수: "",
							상품찜수: "",
							방문자수: "",
							즐겨찾기수: "",
						};
						excelLogs.일자 = this.$formattingDate(this.selectDate + " " + this.julyChartData[0].labels[i]);
						excelLogs.주문액 = this.julyChartData[0].datasets[j].data[i];
						excelLogs.주문수 = this.julyChartData[1].datasets[j].data[i];
						excelLogs.상품상제페이지방문수 = this.julyChartData[2].datasets[j].data[i];
						excelLogs.상품찜수 = this.julyChartData[3].datasets[j].data[i];
						excelLogs.방문자수 = this.julyChartData[4].datasets[j].data[i];
						excelLogs.즐겨찾기수 = this.julyChartData[5].datasets[j].data[i];
	
						console.log(excelLogs)
						excel.push(excelLogs);
					}
					const excelSheet = XLSX.utils.json_to_sheet(excel);
					XLSX.utils.book_append_sheet(workBook, excelSheet, this.julyChartData[0].datasets[j].label);
					excel.splice(0, excel.length)
				}
			}
			if(this.selectDate == '2023년 06월'){
				for(let j in this.junChartData[0].datasets){
					for (let i in this.junChartData[0].datasets[0].data) {
						const excelLogs = {
							일자: "",
							주문액: "",
							주문수: "",
							상품상제페이지방문수: "",
							상품찜수: "",
							방문자수: "",
							즐겨찾기수: "",
						};
						excelLogs.일자 = this.$formattingDate(this.selectDate + " " + this.junChartData[0].labels[i]);
						excelLogs.주문액 = this.junChartData[0].datasets[j].data[i];
						excelLogs.주문수 = this.junChartData[1].datasets[j].data[i];
						excelLogs.상품상제페이지방문수 = this.junChartData[2].datasets[j].data[i];
						excelLogs.상품찜수 = this.junChartData[3].datasets[j].data[i];
						excelLogs.방문자수 = this.junChartData[4].datasets[j].data[i];
						excelLogs.즐겨찾기수 = this.junChartData[5].datasets[j].data[i];
	
						console.log(excelLogs)
						excel.push(excelLogs);
					}
					const excelSheet = XLSX.utils.json_to_sheet(excel);
					XLSX.utils.book_append_sheet(workBook, excelSheet, this.junChartData[0].datasets[j].label);
					excel.splice(0, excel.length)
				}
			}
			XLSX.writeFile(workBook, this.selectDate + "주문 통계.xlsx");
        },
    },
};
</script>

<style></style>
