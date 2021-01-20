var accountDocumentPopup = {
    data: function () {
        return {
            name: '',
            file: '',
            type: [],
            addingFile: false,
            fileName: 'Загрузить файл или картинку'
        }
    },
    props: {
        typesDocs: Array
    },
    template: `
        <div class="modal" id="account-document-popup" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Добавление документа</h5>
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" @click="resetData()">×</span></button>
                    </div>
                    <div class="modal-body">
                        <div class="account-info-list mb-5">
                            <!-- <label class="account-info-list__item form-group d-block">
                                <div class="account-info-list__item-title mb-2">Тип документа</div>
                                <select class="form-control account-info-list__item-value" name="type" v-model="type">
                                        <option v-for="type in typesDocs" :value="type"> {{type.name}} </option>
                                </select>
                            </label> -->
                            <label class="account-info-list__item form-group d-block">
                                <div class="account-info-list__item-title mb-2">Название документа</div>
                                <input class="form-control account-info-list__item-value" placeholder="" type="text" name="" v-model="name"/>
                            </label>
                            <div class="dropzone-file"
                                :class="{'is-dragover': addingFile}"
                                @drag.prevent
                                @dragstart.prevent
                                @dragend.prevent="endAddFile()"
                                @dragover.prevent="startAddFile()"
                                @dragenter.prevent="startAddFile()"
                                @dragleave.prevent="endAddFile()"
                                @drop.prevent="addFile($event)"
                            >
                                <div class="dropzone-file__content">
                                    <label class="dropzone-file__label">
                                        <div class="dropzone-file__label-title">{{ fileName }}</div>
                                        <input class="dropzone-file__input" type="file" @change="fileUpload($event)" />
                                    </label>
                                    <div class="dropzone-file__text">Перетащить с помощью Drag n drob</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="text-right">
                            <button class="btn btn-secondary" type="button" data-dismiss="modal" @click="resetData()">Закрыть</button>
                            <button class="btn btn-primary" type="button" @click="saveDocument()" :disabled="!name || type.length == 0 || !file" data-toggle="tooltip" data-placement="top" title="Заполните все поля">Добавить документ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    watch: {
        type(val) {
            this.name = val.name;
            if (val.name === "другое") this.name = "";
        }
    },
    methods: {
        startAddFile() {
            this.addingFile = true;
        },
        endAddFile() {
            this.addingFile = false;
        },
        addFile(event) {
            this.endAddFile();
            this.handleFileUpload(event.dataTransfer.files[0]);
        },
        handleFileUpload(file) {
            const vm = this;
            this.fileName = file.name;
            let reader = new FileReader();
            reader.addEventListener("load", function () {
                vm.file = (reader.result);
            }.bind(this), false);
            if (file) {
                reader.readAsDataURL(file);
            }
        },
        fileUpload(event) {
            this.handleFileUpload(event.target.files[0]);
        },
        resetData() {
            this.name = "";
            this.file = "";
            this.type = "";
            this.file = "";
            this.addingFile = false;
            this.fileName = "Загрузить файл или картинку";
        },
        saveDocument() {
            var formData = new FormData();
            formData.append("name", this.name);
            formData.append("file", this.file);
            formData.append("type", this.type.id);
            $.ajax({
                type: "POST",
                url: "./index.php",
                dataType: "json",
                cache: false,
                contentType: false,
                processData: false,
                enctype: 'multipart/form-data',
                data: formData,
                success: function (response) {
                    commit("updateEvents", response.data);
                }
            });
            $("#account-document-popup").modal("hide");
            this.resetData();
        }
    }
};

// new Vue(
Vue.component("account-documents", {
    data: function() {
        return {
            // arrFiles: [],
            typesDocs: [{
                id: "1",
                name: "свидетельство инн",
            },
            {
                id: "2",
                name: "свидетельство огрн",
            },
            {
                id: "3",
                name: "доверенность",
            },
            {
                id: "4",
                name: "другое",
            },
        ]
        }
        
    },
    props: {
        arrFiles: {
            type: Array,
            default: [{
                fileName: "Название файла.jpg",
                name: "Договор / контракт",
            }]
        },
        typesDocs: {
            type: Array,
            default: []
        }
    },
    template: `
        <div>
            <div class="form-group mb-5">
                <div class="account-title mb-4">Документы</div>
                <div class="account-info-list mb-4">
                    <div class="account-info-list__item form-group d-flex align-items-center"  v-for="doc in arrFiles">
                        <div class="account-info-list__item-title mr-3"> {{ doc.name }} </div>
                        <div class="form-control account-info-list__item-value account-info-list__item-value_file"><span class="text-primary"> {{ doc.fileName }}</span>
                            <button class="btn" type="button" @click="test()">&times;</button>
                        </div>
                    </div>
                </div>
                <button class="btn btn-outline-primary" id="account-btn-add-document" type="button">+ Добавить документ </button>
            </div>
            <account-document-popup @saveDocument="addDocument($event)" :typesDocs="typesDocs"></account-document-popup>

        </div>
    `,
    methods: {},
    components: {
        accountDocumentPopup
    }
})
