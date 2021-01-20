function modalPopup(options) {
    var v = $.extend({
            id: 'dynamic-modal-popup',
            title: '',
            content: '',
            footer: '<div class="text-center">' +
                '<button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>' +
                '</div>',
            show: true
        }, options),
        $modal = $('#' + v.id);
    if ($modal.length)
        $modal.remove();
    $modal = $('<div id="' + v.id + '" class="modal fade" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content">' +
        '<div class="modal-header"><h4 class="modal-title"></h4><button type="button" class="close" data-dismiss="modal" aria-label="Закрыть"><span aria-hidden="true">&times;</span></button></div>' +
        '<div class="modal-body"></div>' +
        '<div class="modal-footer"></div></div></div></div>').appendTo('body');
    $modal.find('.modal-title').html(v.title);
    $modal.find('.modal-body').html(v.content);
    $modal.find('.modal-footer').html(v.footer);
    if (v.onClose)
        $modal.on('hidden.bs.modal', v.onClose);
    $modal.modal({
        show: v.show
    });
    return $modal;
};

function modalConfirm(options) {
    if (!options.footer)
        options.footer = '<div class="text-center">' +
        '<button type="button" class="btn btn-primary mr-3 action-ok">Ok</button>' +
        '<button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>' +
        '</div>';
    $modal = modalPopup(options);
    $modal.find('button.action-ok').click(function () {
        if (typeof options.onConfirm === 'function')
            $modal.on('hidden.bs.modal', options.onConfirm);
        $modal.modal('hide');
    });
    return $modal;
};

var experticeActsTrackStepStart = {
    data: function () {
        return {
            typesTransportation: [{
                    type: "ship",
                    label: "Морской траспорт",
                },
                {
                    type: "truck",
                    label: "Автотраспортное средство",
                },
                {
                    type: "none",
                    label: "Укажите вид транспортировки",
                },
                {
                    type: "train",
                    label: "Железнодорожный траспорт",
                },
                {
                    type: "plane",
                    label: "Воздушный траспорт",
                },
                {
                    type: "mail",
                    label: "Почтовое отправление",
                },
                {
                    type: "pipe",
                    label: "Стационарный транспорт",
                },
                {
                    type: "road",
                    label: "Товар, перемещающийся своим ходом",
                },
                {
                    type: "waterway-transport",
                    label: "Внутренний водный траспорт",
                },
            ],
            type: "",
            address: ""
        }
    },

    props: {
        track: {
            type: Object,
            default: function () {
                return {}
            }

        }
    },
    computed: {
        transportation() {
            return this.typesTransportation.filter((el) => {
                return el.type === this.type;
            })[0]
        }
    },
    methods: {
        chooseTransport(index) {
            this.type = this.typesTransportation[index].type
        },
    },
    mounted() {
        this.type = "truck";
        this.address = "Россия, 300041, Тула, Советская улица, 17";
    },
    template: `
        <div>
            <div class="track-list__step">
                <div class="track-list__step-title">Адрес отправителя</div>
                <div class="track-list__step-icon"><i class="fas fa-map-marker-alt"></i></div>
                <div class="track-list__step-info">
                    <div class="track-list__step-info-hover"><a class="track-list__link" href="#">{{ address }}</a></div>
                </div>
            </div>
            <div class="track-list__step">
                <div class="track-list__step-title"></div>
                <div class="track-list__step-icon">
                    <svg class="track-list__step-icon-pic">
                        <use v-bind="{'xlink:href':'../images/icons-tracks/icons-track.svg#'+ transportation.type}"></use>
                    </svg>
                </div>
                <div class="track-list__step-info">
                    <div class="track-list__step-info-hover">
                        <div class="dropdown">
                             <a class="track-list__link" href="#" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {{transportation.label}}
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#" v-if="type.type !== 'none'" v-for="(type,index) in typesTransportation" @click.prevent="chooseTransport(index)">{{type.label}}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
};


var experticeActsTrackStep = {
    data: function () {
        return {
            typesTransportation: [{
                    type: "ship",
                    label: "Морской траспорт",
                },
                {
                    type: "truck",
                    label: "Автотраспортное средство",
                },
                {
                    type: "none",
                    label: "Укажите вид транспортировки",
                },
                {
                    type: "train",
                    label: "Железнодорожный траспорт",
                },
                {
                    type: "plane",
                    label: "Воздушный траспорт",
                },
                {
                    type: "mail",
                    label: "Почтовое отправление",
                },
                {
                    type: "pipe",
                    label: "Стационарный транспорт",
                },
                {
                    type: "road",
                    label: "Товар, перемещающийся своим ходом",
                },
                {
                    type: "waterway-transport",
                    label: "Внутренний водный траспорт",
                },
            ],
            type: "",
            address: "",
            isTransfer: false
        }
    },

    props: {
        track: {
            type: Object,
            default: function () {
                return {}
            }

        }
    },
    computed: {
        transportation() {
            return this.typesTransportation.filter((el) => {
                return el.type === this.type;
            })[0]
        }
    },
    methods: {
        chooseTransport(index) {
            this.type = this.typesTransportation[index].type
        },
        deleteTrack() {
            this.$emit("deleteTrack", this.track.id);
        },
        changeAddress(event) {
            this.address = event.target.value;
        },
        suggestView() {
            var vm = this;
            var suggestView = new ymaps.SuggestView(this.$refs.namePlace);
            suggestView.events.add("select", function (e) {
                vm.address = e.get('item').value;
            })
        },
        startTransfer() {
            this.isTransfer = true;
            this.$emit("startTransfer");
        },
        endTransfer() {
            this.isTransfer = true;
            this.$emit("startTransfer");
        },
        dropTrack(event) {
            this.$emit("dropTrack");
        },
        transferTrack(event) {
            console.log(event);
            // this.$emit("dropTrack");
        }

    },
    mounted() {
        this.type = this.track.typeTransportation;
        this.address = this.track.address;
        var vm = this;
        setTimeout(function () {
            vm.suggestView()
        }, 2000)
    },
    template: `
    <div class="track-list__steps-container" :class="{'track-list__steps-container_transfer': isTransfer}" 
        :draggable="isTransfer" 
        @dragover.prevent="transferTrack($event)" 
        @drop.prevent="dropTrack($event)"
        @dragend="isTransfer=false"
        >
        <div class="track-list__step track-list__step_place" :class="{'track-list__step_red': !address}">
        <div class="track-list__step-title"></div>
        <div class="track-list__step-icon"><i class="fas fa-map-marker-alt"></i></div>
        <div class="track-list__step-info">
            <div class="track-list__step-info-hover">
                <input class="track-list__input" placeholder="Введите пункт назначения" ref="namePlace" :value="address" @change="changeAddress($event)">
                <button class="btn btn-sm track-list__step-btn track-list__step-btn_close" @click="deleteTrack()">&#10006;</button>
            </div>
            <button class="btn track-list__step-btn track-list__step-btn_transfer ml-4"  @mousedown="startTransfer()"><i class="fas fa-grip-lines"></i></button>
        </div>
    </div>
    <div class="track-list__step track-list__step_transport" :class="{'track-list__step_red': transportation.type === 'none'}">
            <div class="track-list__step-title"></div>
            <div class="track-list__step-icon">
                <svg class="track-list__step-icon-pic">
                    <use v-bind="{'xlink:href':'../images/icons-tracks/icons-track.svg#'+ transportation.type}"></use>
                </svg>
            </div>
            <div class="track-list__step-info">
                <div class="track-list__step-info-hover">
                    <div class="dropdown">
                        <a class="track-list__link" href="#" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{transportation.label}}
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#" v-if="type.type !== 'none'" v-for="(type,index) in typesTransportation" @click.prevent="chooseTransport(index)">{{type.label}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
        `
};



Vue.component("experticeActsTrackList", {
    data: function () {
        return {
            trackList: [{
                    id: 123123,
                    address: "Россия, Порт Галерный Ковш 1",
                    typeTransportation: "ship",
                },
                {
                    id: 11111,
                    address: "Россия, Аэропорт Внуково 1",
                    typeTransportation: "truck",
                },
                {
                    id: 123,
                    address: "Россия, Порт Галерный Ковш 2",
                    typeTransportation: "ship",
                },
                {
                    id: 321,
                    address: "Россия, Аэропорт Внуково 2",
                    typeTransportation: "truck",
                },
            ],
            indexTransferTrack: -1,
            transferTrackData: {},
        }
    },
    components: {
        experticeActsTrackStep,
        experticeActsTrackStepStart
    },
    methods: {
        addTrack() {
            this.trackList.push({
                id: Math.random(),
                address: "",
                typeTransportation: "none",
            })
        },
        deleteTrack(trackId) {
            var vm = this;
            modalConfirm({
                title: 'Удаление пункта маршрута',
                content: 'Подтвердите удаление пункта маршрута',
                onConfirm: function () {
                    vm.trackList = vm.trackList.filter(function (el) {
                        return el.id !== trackId;
                    })
                }
            });
        },
        transferTrack(indexDropTrack) {
            let newTrackList = this.trackList.map(function (el) {
                // return JSON.parse(JSON.stringify(el));
                return el;
            })
            if (indexDropTrack < this.indexTransferTrack) {
                this.trackList.splice(indexDropTrack, 0, this.transferTrackData);
                this.trackList.splice(this.indexTransferTrack + 1, 1);
                // newTrackList.splice(indexDropTrack, 0, this.transferTrackData);
                // newTrackList.splice(this.indexTransferTrack + 1, 1);

            }
            if (indexDropTrack > this.indexTransferTrack) {
                this.trackList.splice(indexDropTrack + 1, 0, this.transferTrackData);
                this.trackList.splice(this.indexTransferTrack, 1);
                // newTrackList.splice(indexDropTrack + 1, 0, this.transferTrackData);
                // newTrackList.splice(this.indexTransferTrack, 1);
            }
            // this.trackList = newTrackList;

        },
        startTransferTrack(index, track) {
            this.indexTransferTrack = index;
            this.transferTrackData = track;
        },
        changeTracks(indexDropTrack) {
            // console.log(trackOnDrop, indexDropTrack);
            // this.trackList.splice(indexDropTrack, 0, this.track);
        },
        dropEvent(event) {
            console.log(123);
            console.log(event);
        }
    },
    //  @dragover="transferTrack($event)" @drop="dropEvent($event)"
    template: `
    <div class="track-list" >
        <expertice-acts-track-step-start></expertice-acts-track-step-start>
        <expertice-acts-track-step 
            v-for="(track,index) in trackList" 
            :track="track" ref="trackStep" 
            :key="track.id" 
            @deleteTrack="deleteTrack($event)" 
            @startTransfer="startTransferTrack(index, track)"
            @dropTrack="transferTrack(index)"
            >
        </expertice-acts-track-step>
        <div class="track-list__step track-list__step_no-dots">
            <div class="track-list__step-title" ref="title">Адрес получателя</div>
            <div class="track-list__step-icon"><i class="fas fa-map-marker-alt"></i></div>
            <div class="track-list__step-info">
                <div class="track-list__step-info-hover">
                    <a class="track-list__link" href="#">Сhina, 300041, Pekin, litujiw[htn’ ,, 17</a>
                </div>
            </div>
        </div>
        <div class="track-list__step track-list__step_no-dots">
            <div class="track-list__step-title"></div>
            <div class="track-list__step-icon"><i class="fas fa-plus"></i></div>
            <div class="track-list__step-info py-0">
                <button class="btn form-btn-text" @click="addTrack()">Добавить промежуточный пункт маршрута </button>
            </div>
        </div>
    </div>
    `
});

var experticeActsProducts = {
    data: function () {
        return {
            products: [
                [{
                        typePackage: "Бутылка",
                        cost: "150",
                        name: "Яблочное пюре",
                        origin: "П/К/Д",
                        maker: "ООО Яблочный рай",
                        tnved: "",
                        comment: "",
                    },
                    {
                        name: "Загустители",
                        cost: "75",
                        origin: "Иностр",
                        maker: "ООО Яблоко",
                        tnved: "",
                        comment: "",
                    },
                    {
                        name: "Красители",
                        cost: "75",
                        origin: "Отеч",
                        maker: "ООО Красители",
                        tnved: "",
                        comment: ""
                    }
                ],
                [{
                        typePackage: "Банка",
                        cost: "150",
                        name: "Яблочный сок",
                        origin: "Иностр.",
                        maker: "ООО Яблочное искусство",
                        tnved: "7102",
                        comment: "Отличный сок",
                    },
                    {
                        name: "Загустители",
                        cost: "75",
                        origin: "Иностр",
                        maker: "ООО Яблоко",
                        tnved: "7104",
                        comment: "",
                    },
                    {
                        name: "Красители",
                        cost: "75",
                        origin: "Отеч",
                        maker: "ООО Красители",
                        tnved: "7120",
                        comment: ""
                    }
                ],
            ],
            typesPackage: [
                "Бутылка",
                "Пакет",
                "Банка",
            ]
        }
    },
    computed: {
        sortProducts() {
            var objProducts = {
                mainProduct: [],
                productComposition: []
            };
            var result = [];
            var arrsProduct = [];
            // return objProducts;
            this.products.forEach(function (product, index) {
                arrsProduct[index] = product.reduce(function (products, el) {
                    if (el.hasOwnProperty("typePackage")) {
                        products.mainProduct.push(el)
                    } else {
                        products.productComposition.push(el)
                    }
                    return products;
                }, objProducts);
                // result.push(arrsProduct[index].mainProduct.concat(arrsProduct[index].productComposition))
            })
            return arrsProduct;
        }
    },
    methods: {
        addMaterial(index) {
            this.products[index].push({
                name: "",
                cost: "",
                origin: "",
                maker: "",
                tnved: "",
                comment: ""
            })
        },
        removeMaterial(index, matIndex) {
            var vm = this;
            modalConfirm({
                title: 'Удаление состава сырья',
                content: 'Подтвердите удаление состава сырья',
                onConfirm: function () {
                    vm.products[index].splice(matIndex, 1);
                }
            });

        },
        addProduct() {
            this.products.push([{
                typePackage: "Банка",
                cost: "",
                name: "",
                origin: "",
                maker: "",
                tnved: "",
                comment: "",
            }])
        },
        removeProduct(index) {
            this.products.splice(index, 1);
        },
    },

    template: `
    <div class="mb-5">
    <div class="form-title mb-4">Товар</div>
        <table class="expertice-acts-product-table table-borderless mb-3" v-for="(product, index) in products">
            <colgroup>
                <col width="18%"/>
                <col width="14%"/>
                <col width="8%"/>
                <col width="8%"/>
                <col width="18%"/>
                <col width="10%"/>
                <col width="22%"/>
                <col width="2%"/>
            </colgroup>
            <thead class="thead">
                <tr>
                    <th>Вид упаковки</th>
                    <th>Наименование товара</th>
                    <th>Стоимость</th>
                    <th>Происхождение</th>
                    <th>Изготовитель</th>
                    <th>ТН ВЭД</th>
                    <th>Комментарий</th>
                    <th></th>
                </tr>
            </thead>
            <tbody class="tbody">
                <tr  v-for="(composition, compositionIndex) in product">
                    <td :rowspan="Object.keys(product).length + 1" v-if="compositionIndex === 0" valign="top">
                        <select class="form-control form-control-expertice-acts" :value="composition.typePackage">
                            <option v-for="type in typesPackage"> {{type}} </option>
                        </select>
                    </td>
                    <td>
                        <input class="form-control form-control-expertice-acts"  :value="composition.name" :readonly="true"/>
                    </td>
                    <td>
                        <input class="form-control form-control-expertice-acts"  :value="composition.cost"/>
                    </td>
                    <td>
                        <input class="form-control form-control-expertice-acts" :value="composition.origin"/>
                    </td>
                    <td>
                        <input class="form-control form-control-expertice-acts"  :value="composition.maker"/>
                    </td>
                    <td>
                        <input class="form-control form-control-expertice-acts"  :value="composition.tnved"/>
                    </td>
                    <td>
                        <input class="form-control form-control-expertice-acts"  :value="composition.comment"/>
                    </td>
                    <td>
                        <button class="btn btn-sm" type="button" v-if="compositionIndex !== 0" @click="removeMaterial(index, compositionIndex)">
                            <span>&#10006;</span>
                        </button>
                    </td>
                    
                </tr>
                <tr>
                    <td colspan="6">
                        <div class="d-flex justify-content-between">
                            <button class="btn btn-sm form-btn-text" @click="addMaterial(index)">+ Добавить состав сырья</button>
                            <button class="btn btn-sm form-btn-text form-btn-text_gray" @click="removeProduct(index)"> &#10006; Удалить товар</button>
                        </div>
                    </td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    <button class="btn btn-sm form-btn-text" @click="addProduct()">+ Добавить товар</button>
</div>
    
    `
};

new Vue({
    el: "#expertice-acts",
    data: function () {
        return {
            phones: ["123123123"],
            emails: [""]

        }
    },
    methods: {
        addField(type) {
            switch (type) {
                case 'email':
                    this.emails.push('');
                    break;
                case 'phone':
                    this.phones.push('');
                    break;
            }
        },
        removeField(type, index) {
            switch (type) {
                case 'email':
                    this.emails.splice(index, 1);
                    break;
                case 'phone':
                    this.phones.splice(index, 1);
                    break;
            }
        },
    },
    components: {
        experticeActsProducts
    },
    mounted() {
        $('[data-toggle="tooltip"]').tooltip()
    },
    template: `<div class="expertice-acts py-5">
    <div class="container">
        <div class="row mb-4">
            <div class="col d-flex">
                <h2 class="title">Экспертиза страны происхождения товара</h2>
            </div>
        </div>
        <div class="mb-5">
            <div class="form-title mb-4">Заявитель</div>
            <div class="form-group row">
                <div class="col-sm-2 col-form-label form-lable-input">Фио Заявителя<span class="text-warning">*</span></div>
                <div class="col-sm-10">
                    <input class="form-control form-control-expertice-acts" id="inputEmail3" type="text" placeholder=""/>
                </div>
            </div>
            <div class="form-group row" v-for="(phone,index) in phones">
                <div class="col-sm-2 col-form-label form-lable-input"><span v-if="index === 0">Телефон заявителя<span class="text-warning">*</span></span></div>
                <div class="col-sm-10 d-flex align-items-center">
                    <input class="form-control form-control-expertice-acts" type="tel" placeholder="" v-model="phones[index]"/>
                    <button class="btn form-btn-add-plus ml-3" @click="addField('phone')" v-if="index === 0  && phones.length <= 5">+</button>
                    <button class="btn form-btn-add-plus ml-3" @click="removeField('phone', index)" v-else>-</button>
                </div>
            </div>
            <div class="form-group row" v-for="(email,index) in emails">
                <div class="col-sm-2 col-form-label form-lable-input"><span v-if="index === 0">Электронная почта заявителя<span class="text-warning">*</span></span></div>
                <div class="col-sm-10 d-flex align-items-center">
                    <input class="form-control form-control-expertice-acts" type="email" placeholder="" v-model="emails[index]"/>
                    <button class="btn form-btn-add-plus ml-3" @click="addField('email')" v-if="index === 0  && email.length <= 5">+</button>
                    <button class="btn form-btn-add-plus ml-3" @click="removeField('email', index)" v-else>-</button>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="form-group row">
                        <div class="col-sm-4 col-form-label form-lable-input">ИНН заявителя<span class="text-warning">*</span></div>
                        <div class="col-sm-8">
                            <input class="form-control form-control-expertice-acts" type="text" placeholder=""/>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group row">
                        <div class="col-sm-3 col-form-label form-lable-input">ЕСИА Заявителя<span class="text-warning">*</span></div>
                        <div class="col-sm-9">
                            <input class="form-control form-control-expertice-acts" type="text" placeholder=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-5">
            <div class="form-title mb-4">Маршрут</div>
            <div class="row">
                <div class="col-12 col-sm-6">
                    <div class="form-group row">
                        <div class="col-sm-4 col-form-label form-lable-input">
                             <b>Экспортер</b> (контрактодержатель)</div>
                        <div class="col-sm-8">
                            <div class="form-control form-control-expertice-acts text-primary" type="text" placeholder=""><a class="expertice-form-link" href="#" data-toggle="modal" data-target="#expertice-acts-popup">ООО "Ромашка"</a></div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-4 col-form-label form-lable-input"><b>Грузоотправитель</b> (склад)</div>
                        <div class="col-sm-8">
                            <div class="form-control form-control-expertice-acts" type="tel" placeholder=""><a class="expertice-form-link" href="#" data-toggle="modal" data-target="#expertice-acts-popup">ООО "Ромашка-транспорт"</a></div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-4 col-form-label form-lable-input"><b>Грузополучатель</b> (склад)</div>
                        <div class="col-sm-8">
                            <div class="form-control form-control-expertice-acts" type="email" placeholder=""><a class="expertice-form-link" href="#"  data-toggle="modal" data-target="#expertice-acts-popup">Romashka-transport Ltd</a></div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-4 col-form-label form-lable-input"><b>Импортер</b></div>
                        <div class="col-sm-8">
                            <div class="form-control form-control-expertice-acts" type="text" placeholder=""><a class="expertice-form-red-link" href="#" data-toggle="modal" data-target="#expertice-acts-popup">Укажите организацию</a></div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6">
                    <expertice-acts-track-list></expertice-acts-track-list>
                </div>
            </div>
        </div>
        <expertice-acts-products></expertice-acts-products>
        <account-documents></account-documents>
        <button class="btn btn btn-blue text-uppercase px-5 py-2" type="submit">Заказать</button>
    </div>
    <div class="modal fade show expertice-acts-popup" id="expertice-acts-popup" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header px-4">
                    <h5 class="modal-title">Выбор организации</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body p-4">
                    <div class="form-group w-75">
                        <div class="d-flex mb-4">
                            <div class="text-muted mr-4">Государтсвенная принадлежность</div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" id="inlineRadio1" type="radio" name="inlineRadioOptions" value="option1" checked/>
                                <label class="form-check-label text-muted" for="inlineRadio1">Российская</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" id="inlineRadio2" type="radio" name="inlineRadioOptions" value="option2"/>
                                <label class="form-check-label text-muted" for="inlineRadio2">Зарубежная</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <input placeholder="ИНН" class="form-control" id="org-inn" type="text" v-model="orgInn" pattern="[0-9]{10,12}"/>
                        </div>
                        <div class="form-group">
                            <input placeholder="КПП" class="form-control" id="org-kpp" type="text" v-model="orgKpp" pattern="[0-9]{9}" :readonly="isMainOrganization"/>
                        </div>
                        <div class="form-check form-group">
                            <input class="form-check-input" type="checkbox" id="account-organizations-is-main-checkbox" v-model="isMainOrganization">
                            <label class="form-check-label text-muted" for="account-organizations-is-main-checkbox">Основная организация</label>
                        </div>
                    </div>
                    <div id="expertice-popup-organization" class="expertice-popup-organization collapse show">
                        <div class="expertice-popup-organization-title mb-2">ООО "Ромашка транспорт"</div>
                        <div class="text-success mb-2">Действующая организация<i class="fas fa-check-circle ml-2"></i></div>
                        <div class="row">
                            <div class="col-6">
                                <div class="expertice-popup-organization-info mb-3">
                                    <div class="expertice-popup-organization-info__title">ОГРН</div>
                                    <div class="expertice-popup-organization-info__value">2415759898 от 6 ноября 2002 г</div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-6">
                                        <div class="expertice-popup-organization-info">
                                            <div class="expertice-popup-organization-info__title">Дата регистрации </div>
                                            <div class="expertice-popup-organization-info__value">16.07.1997 г. 10 000 руб</div><a class="expertice-popup-organization-info__link" href="#">Все реквизиты</a>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="expertice-popup-organization-info">
                                            <div class="expertice-popup-organization-info__title">Уставной капитал </div>
                                            <div class="expertice-popup-organization-info__value">10000</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="expertice-popup-organization-info mb-3">
                                    <div class="expertice-popup-organization-info__title">Юридический адрес </div>
                                    <div class="expertice-popup-organization-info__value">300000, Тульская обл. г. Тула, ул. Ф.Энгельса, д. 70, лит. А, комн. 23 </div>
                                </div>
                                <div class="expertice-popup-organization-info mb-3">
                                    <div class="expertice-popup-organization-info__title">+ Код Google </div>
                                    <div class="expertice-popup-organization-info__value"> [54.181513, 37.612848] </div>
                                </div>
                                <div class="expertice-popup-organization-info mb-3">
                                    <div class="expertice-popup-organization-info__title">Руководитель</div>
                                    <div class="expertice-popup-organization-info__value">Директор</div><a class="expertice-popup-organization-info__link" href="#">Удальцов Виктор Александрович</a>
                                    <div class="expertice-popup-organization-info__value">с ноября 2002 г.</div>
                                </div>
                                <div class="expertice-popup-organization-info mb-3">
                                    <div class="expertice-popup-organization-info__title">Среднесписоченая численность <span class="ml-2" data-toggle="tooltip" data-placement="top" title="Среднесписоченая численность"><i class="far fa-question-circle"></i></span></div>
                                    <div class="expertice-popup-organization-info__value">17 сотрудников (2019).</div>
                                </div>
                                <div class="expertice-popup-organization-info mb-3">
                                    <div class="expertice-popup-organization-info__title">Реестр МСП <span class="ml-2" data-toggle="tooltip" data-placement="top" title="Реестр МСП"> <i class="far fa-question-circle"></i></span></div>
                                    <div class="expertice-popup-organization-info__value">Статус: микропредприятие присвоен 1 авгута 2016 г..</div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="expertice-popup-organization-info mb-3">
                                    <div class="expertice-popup-organization-info__title">Основной вид деятельности </div>
                                    <div class="expertice-popup-organization-info__value">Деятельность, связанная с использование вычислительной техники и информационных технологий, прочая [62.09] </div>
                                </div>
                                <div class="expertice-popup-organization-info mb-3">
                                    <div class="expertice-popup-organization-info__title">Налоговый орган </div>
                                    <div class="expertice-popup-organization-info__value">Межрайонная инспекция ФНС России №12 по Тульской области с 23 ноября 2015 г. </div>
                                </div>
                                <div class="expertice-popup-organization-info mb-3">
                                    <div class="expertice-popup-organization-info__title">Коды статистики </div>
                                    <div class="expertice-popup-organization-info__value">ОКПО        475390634630 </div>
                                    <div class="expertice-popup-organization-info__value">ОКАТО       475390634630 </div>
                                    <div class="expertice-popup-organization-info__value">ОКТМО       475390634630 </div>
                                    <div class="expertice-popup-organization-info__value">ОКФС        16 </div>
                                    <div class="expertice-popup-organization-info__value">Частная собственность</div>
                                    <div class="expertice-popup-organization-info__value">ОКОГУ      475390634630</div>
                                    <div class="expertice-popup-organization-info__value">Организации, утвержденные юридическими лицами или гражданами, или юридическими лицами и гражданами совместн</div>
                                </div>
                                <div class="expertice-popup-organization-info mb-3">
                                    <div class="expertice-popup-organization-info__title">Контакты </div>
                                    <div class="expertice-popup-organization-info__value">Телефон 8 (945) 345 67 67</div><a class="expertice-popup-organization-info__link" href="#">Все контакты</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <!-- <button class="btn btn-outline-primary" data-toggle="collapse" data-target="#expertice-popup-organization">Подробнее</button> -->
                    <button class="btn btn-primary" data-dismiss="modal">Выбрать</button>
                </div>
        </div>
    </div>
</div>
`
})