// var organizationTab = {
//     template: `
//     <div class="tab-pane fade" role="tabpanel" aria-labelledby="nav-home-tab" :id="'organization-' + org.id">
//         <form class="account-organization py-5">
//             <div class="row mb-5">
//                 <div class="col-12 col-sm-6 col-md-4 mb-3 mb-md-0">
//                     <div class="card account-organization-certificate">
//                         <div class="card-body account-organization-certificate__body">
//                             <div class="account-organization-certificate__pic mr-3"><img class="account-organization-certificate__img" src="../images/account-organizations/certificate1.jpg"/>
//                             </div>
//                             <div class="account-organization-certificate__info">
//                                 <div class="account-organization-certificate__title mb-2">Свидетельство участника Антикоррупционной Хартии</div>
//                                 <div class="account-organization-certificate__text">AC-RU-188 действует до 01.09.2020</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col-12 col-sm-6 col-md-4 mb-3 mb-md-0">
//                     <div class="card account-organization-certificate">
//                         <div class="card-body account-organization-certificate__body">
//                             <div class="account-organization-certificate__pic mr-3"><img class="account-organization-certificate__img" src="../images/account-organizations/certificate2.jpg"/>
//                             </div>
//                             <div class="account-organization-certificate__info">
//                                 <div class="account-organization-certificate__title mb-2">Свидетельство члена Реестра надежных партнеров</div>
//                                 <div class="account-organization-certificate__text">NP-PRI-74  действует до 11.08.2020</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col-12 col-sm-6 col-md-4 mb-3 mb-md-0">
//                     <div class="card account-organization-certificate account-organization-certificate_not-active">
//                         <div class="card-body account-organization-certificate__body">
//                             <div class="account-organization-certificate__pic mr-3"><img class="account-organization-certificate__img" src="../images/account-organizations/certificate3.jpg"/>
//                             </div>
//                             <div class="account-organization-certificate__info">
//                                 <div class="account-organization-certificate__title mb-2">Членский билет Торгово-промышленной Палаты</div>
//                                 <div class="account-organization-certificate__text mb-3">Отсутствует</div><a class="btn btn-outline-primary" href="#">Подать заявку</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <ul class="account-info-list mb-5 w-75">
//                 <li class="account-info-list__item mb-3">
//                     <h3 class="account-info-list__item-title mb-2">ОГРНИП</h3>
//                     <div class="account-info-list__item-value"> {{ org.ogrn }}</div>
//                 </li>
//                 <li class="account-info-list__item mb-3">
//                     <h3 class="account-info-list__item-title mb-2">ИНН</h3>
//                     <div class="account-info-list__item-value">{{ org.inn }}</div>
//                 </li>
//                 <li class="account-info-list__item mb-3">
//                     <h3 class="account-info-list__item-title mb-2">ОКОПФ</h3>
//                     <div class="account-info-list__item-value"> {{ org.okopf }} </div>
//                 </li>
//                 <li class="account-info-list__item mb-3">
//                     <h3 class="account-info-list__item-title mb-2">Дата регистрации</h3>
//                     <div class="account-info-list__item-value"> {{ org.registration_date }} </div>
//                 </li>
//                 <li class="account-info-list__item mb-3">
//                     <h3 class="account-info-list__item-title mb-2">Дата постановки на учёт</h3>
//                     <div class="account-info-list__item-value"> {{ org.nalog_reg_date }}</div>
//                 </li>
//                 <li class="account-info-list__item mb-3">
//                     <h3 class="account-info-list__item-title mb-2">Полное юридическое название</h3>
//                     <div class="account-info-list__item-value"> {{ org.full_name }} </div>
//                 </li>
//                 <li class="account-info-list__item mb-3">
//                     <h3 class="account-info-list__item-title mb-2">Вид деятельности </h3>
//                     <div class="account-info-list__item-value"> {{ org.activity }} </div>
//                 </li>
//                 <li class="account-info-list__item account-info-list__item_tel mb-3">
//                     <h3 class="account-info-list__item-title mb-2">Телефон</h3>
//                     <div class="position-relative mb-2" v-for="(phone, index) in org.phones" :key="phone">
//                         <input class="form-control" placeholder="" type="tel" name="tel" :value="phone"/>
//                         <button class="btn btn-sm account-info-list__btn" type="button" v-if="index === 0" @click="addField('phone', index)">+</button>
//                         <button class="btn btn-sm account-info-list__btn" type="button" v-else @click="removeField('phone', index)">-</button>
//                     </div>
//                 </li>
//                 <li class="account-info-list__item mb-3"> 
//                     <h3 class="account-info-list__item-title mb-2">Адрес дял доставки документов</h3>
//                     <div class="account-info-list__item-value"> {{ org.address }} </div>
//                 </li>
//                 <li class="account-info-list__item mb-3"> 
//                     <h3 class="account-info-list__item-title mb-2">Юридический адрес</h3>
//                     <input class="form-control" type="text" name="address" :value="org.legal_address" />
//                 </li>
//                 <li class="account-info-list__item account-info-list__item_email mb-3">
//                     <h3 class="account-info-list__item-title mb-2">Email</h3>
//                     <div class="position-relative mb-2"  v-for="(email, index) in org.emails" :key="email">
//                         <input class="form-control" placeholder="ekaterina@list.ru" type="email" name="email"/>
//                         <button class="btn btn-sm account-info-list__btn" type="button" v-if="index === 0" @click="addField('email', index)">+</button>
//                         <button class="btn btn-sm account-info-list__btn" type="button" v-else @click="removeField('email', index)">-</button>
//                     </div>
//                 </li>
//             </ul>
//             <btn class="btn btn-outline-primary account-organization__btn-save" type="submit">Сохранить</btn>
//         </form>
//         <account-documents :arrFiles="org.files"></account-documents>
//     </div>
    
//     `, 
//     props: {
//         org: {
//             type: Object,
//             default: {}
//         }
//     },
//     methods: {
//     }
    
// } 


// new Vue(
//     {
//         el: "#account-organizations",
//         data: {
//             arrOrganizations: [
//                 {   
//                     employee_id: "1772308",
//                     id: "650320",
//                     name: "ИП Куренков Александр викторович",
//                     phones: ["+79539123123", "+12312312"],
//                     emails: ["123@mail.ru","321@mail.ru"],
//                     ogrn: "316715400122041",
//                     inn: "710302319409",
//                     okopf: "50102 — Индивидуальные предприниматели",
//                     registration_date: "6 декабря 2016 г.",
//                     nalog_reg_date: "30 декабря 2017 г.",
//                     full_name: "Индивидуальный предприниматель Куренков Александр Викторович",
//                     activity: "Деятельность по обработке данных, предоставление услуг по размещению информации и связанная с этим деятельность (63.11)",
//                     address: "г. Тула, ул. Ф. Энгельса, 70, оф. 390",
//                     legalAddress: "г. Тула, ул. Ф. Энгельса, 70, оф. 390",
//                     files: []
//                 },
//                 {   
//                     employee_id: "1772323",
//                     id: "650321",
//                     name: "ИП Куренков Виктор Викторович",
//                     phones: ["+79539123123", "+12312312"],
//                     emails: ["123@mail.ru","321@mail.ru"],
//                     ogrn: "316715400122041",
//                     inn: "710302319409",
//                     okopf: "50102 — Индивидуальные предприниматели",
//                     registration_date: "6 декабря 2016 г.",
//                     nalog_reg_date: "30 декабря 2017 г.",
//                     full_name: "Индивидуальный предприниматель Куренков Александр Викторович",
//                     activity: "Деятельность по обработке данных, предоставление услуг по размещению информации и связанная с этим деятельность (63.11)",
//                     address: "г. Тула, ул. Ф. Энгельса, 70, оф. 390",
//                     legal_address: "г. Тула, ул. Ф. Энгельса, 70, оф. 390",
//                     files: []
//                 },
//             ]
//         },
//         template: `
//         <div class="account-organizations">
//             <ul class="nav nav-tabs account-organizations__tabs" role="tablist">
//                 <li class="nav-item account-organizations__tabs-item" v-for="org in arrOrganizations">
//                     <a class="nav-link account-organizations__tabs-link" :href="'#organization-' + org.id" data-toggle="tab"> {{ org.name }} </a>
//                 </li>
//             </ul>
//             <organization-tab v-for="org in arrOrganizations" :org="org"></organization-tab>
//         </div>
//         `,
//         methods: {},
//         components: {
//             organizationTab
//         }
//     }
// )