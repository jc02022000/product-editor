<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
    </Head>
    <NuxtLayout :open="this.view || this.add || this.alert">
      <SectionTool
        @clickButton="open('add')"
        :open="this.view || this.add || this.alert"
        v-model="input"
      />
      <div class="w-[95%] mt-8 ml-9">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left bg-white">
            <caption class="text-left mb-2">
              List of Books
            </caption>
            <thead class="text-xs t uppercase bg-gray-50 border-b">
              <tr>
                <td scope="col" class="px-2 py-1 font-medium whitespace-nowrap">
                  <input
                    type="checkbox"
                    id="all"
                    class="mr-2"
                    aria-label="Select All Books"
                    :tabindex="this.view || this.add || this.alert ? -1 : 0"
                  />
                </td>
                <th scope="col" class="px-6 py-3">ISBN</th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">Book Name</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">User Types</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="text-end">Action</div>
                </th>
              </tr>
            </thead>
            <tbody v-for="(item, index) in data">
              <tr class="border-b">
                <td class="px-2 py-2">
                  <input
                    type="checkbox"
                    :aria-label="item.title + 'Book'"
                    :tabindex="this.view || this.add || this.alert ? -1 : 0"
                  />
                </td>
                <td scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                  {{ item.isbn }}
                </td>
                <td class="px-6 py-4">{{ item.title }}</td>
                <td class="px-6 py-4">
                  <ol>
                    <li v-for="index in item.users">{{ types[index] }}</li>
                  </ol>
                </td>
                <td class="px-6 py-4 text-right">
                  <button
                    @click="open('view', index)"
                    :tabindex="this.view || this.add || this.alert ? -1 : 0"
                  >
                    <font-awesome-icon
                      icon="pen-to-square"
                      class="p-1 text-[#0053B7]"
                    />
                    <span class="sr-only">{{ item.title }} Book Edit</span>
                  </button>
                  <button
                    @click="open('alert', index)"
                    :tabindex="this.view || this.add || this.alert ? -1 : 0"
                  >
                    <font-awesome-icon
                      icon="trash-can"
                      class="p-1 text-red-800"
                    />
                    <span class="sr-only">{{ item.title }} Book Delete</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- Main modal add-->
          <div
            class="fixed top-0 left-0 right-0 z-50 w-full h-full bg-black opacity-40"
            :class="backdrop ? '' : 'hidden'"
          ></div>
          <div
            class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex items-center justify-center overflow-scroll"
            :class="add ? '' : 'hidden'"
          >
            <div
              class="relative w-full max-w-2xl bg-white rounded-lg text-black"
            >
              <div class="relative rounded-lg shadow">
                <div>
                  <div
                    class="flex items-start justify-between p-4 pb-1 rounded-t border-b border-slate-400"
                  >
                    <h2 class="text-xl font-semibold text-gray-900">
                      Add New Book
                    </h2>
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      @click="closeModal('add')"
                      :tabindex="this.alert ? -1 : 0"
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                </div>
                <!-- Modal body-->
                <div class="p-6 max-h-[400px] overflow-scroll">
                  <fieldset
                    id="error"
                    :tabindex="this.alert ? -1 : 0"
                    class="border-red-600 border-[0.5px] rounded-lg flex justify-center p-5 bg-red-200"
                    v-if="this.v$.$error"
                  >
                    <legend class="font-bold text-red-900">
                      Errors have Occured
                    </legend>

                    <ol class="list-disc text-sm">
                      <li v-if="isbnRequired">
                        International Standard Book Number is Required. Field
                        cannot be empty.
                      </li>
                      <li v-if="lengthError">
                        International Standard Book Number should be
                        <emp>13 characters</emp> long.
                      </li>
                      <li v-if="titleRequired">
                        Book Title is Required. Field cannot be empty.
                      </li>
                    </ol>
                  </fieldset>
                  <div>
                    <div class="mb-6">
                      <label for="isbnAdd" class="text-xs m-0 text-[#101827]">
                        International Standard Book Number (13 Characters) -
                        <i><b class="text-red-700">required</b></i>
                      </label>
                      <input
                        id="isbnAdd"
                        type="number"
                        class="border-b-[0.8px] border-b-slate-400 w-full mt-1"
                        placeholder="example: 978-1-4028-9462-6"
                        :tabindex="this.alert ? -1 : 0"
                        v-model="isbn"
                        :class="error ? 'border-red-600' : ''"
                      />
                    </div>
                    <div class="mb-6">
                      <label for="titleAdd" class="text-xs m-0 text-[#101827]"
                        >Name of Book -
                        <i><b class="text-red-700">required</b></i></label
                      >
                      <input
                        id="titleAdd"
                        type="text"
                        class="border-b-[0.8px] border-b-slate-400 w-full mt-1"
                        placeholder="example: A Programmer's Guide to Proper Coding Standards"
                        :tabindex="this.alert ? -1 : 0"
                        v-model="bookTitle"
                      />
                    </div>
                    <div>
                      <label for="descAdd" class="text-xs m-0 text-[#101827]"
                        >Book Description</label
                      >
                      <textarea
                        id="descAdd"
                        class="max-h-[100px] border-t-[1px] border-[1px] p-2 overflow-scroll rounded-lg w-full"
                        :tabindex="this.alert ? -1 : 0"
                        v-model="description"
                      ></textarea>
                    </div>
                  </div>
                  <div class="mt-5">
                    <fieldset>
                      <legend class="text-xs text-[#101827]">
                        List of User Types:
                      </legend>
                      <div
                        class="h-[200px] border-t-[1px] border-[1px] p-4 overflow-scroll rounded-lg"
                      >
                        <div class="w-full border-b-[0.5px] flex p-2 mb-2">
                          <input
                            type="checkbox"
                            class="mr-2 border-slate-600"
                            id="addAll"
                            :tabindex="this.alert ? -1 : 0"
                          />
                          <label for="addAll" class="text-sm"
                            >Select All User Types</label
                          >
                        </div>
                        <div class="grid grid-cols-2">
                          <div class="flex p-2" v-for="(item, index) in types">
                            <input
                              type="checkbox"
                              class="mr-2"
                              @click="clickCheckBox(index)"
                              :checked="this.users.includes(index)"
                              :id="index"
                              :tabindex="this.alert ? -1 : 0"
                            />
                            <label :for="index" class="text-sm">{{
                              item
                            }}</label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                <!-- Modal footer -->
                <div
                  class="w-full flex items-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
                >
                  <button
                    type="button"
                    class="ml-auto h-[40px] w-[100px] rounded-lg text-sm font-medium px-5 py-2.5 bg-slate-300 text-black hover:bg-slate-200 border border-slate-300"
                    @click="closeModal('add')"
                    :tabindex="this.alert ? -1 : 0"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="h-[40px] w-[120px] text-white bg-[#1C4E9A] hover:bg-[#0053B7] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    @click="open('alert')"
                    :tabindex="this.alert ? -1 : 0"
                  >
                    Add Book
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!--Modal Edit-->
          <div
            class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex items-center justify-center"
            :class="view ? '' : 'hidden'"
          >
            <div
              class="relative w-full max-w-2xl bg-white rounded-lg text-black"
            >
              <div class="relative rounded-lg shadow">
                <div>
                  <div
                    class="flex items-start justify-between p-4 pb-1 rounded-t border-b border-slate-400"
                  >
                    <h2 class="text-xl font-semibold text-gray-900">
                      Edit Book: {{ editTitle }}
                    </h2>
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      @click="closeModal('view')"
                      :tabindex="this.alert ? -1 : 0"
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                </div>
                <!-- Modal body-->
                <div class="p-6 max-h-[400px] overflow-scroll">
                  <fieldset
                    id="errorEdit"
                    :tabindex="this.alert ? -1 : 0"
                    class="border-red-600 border-[0.5px] rounded-lg flex justify-center p-5 bg-red-200"
                    v-if="this.v$.$error"
                  >
                    <legend class="font-bold text-red-900">
                      Errors have Occured
                    </legend>

                    <ol class="list-disc text-sm">
                      <li v-if="isbnRequired">
                        International Standard Book Number is Required. Field
                        cannot be empty.
                      </li>
                      <li v-if="lengthError">
                        International Standard Book Number should be
                        <emp>13 characters</emp> long.
                      </li>
                      <li v-if="titleRequired">
                        Book Title is Required. Field cannot be empty.
                      </li>
                    </ol>
                  </fieldset>
                  <div>
                    <div class="mb-6">
                      <label for="isbnbrave" class="text-xs m-0 text-[#101827]">
                        International Standard Book Number (ISBN)
                      </label>
                      <input
                        type="number"
                        class="border-b-[0.8px] border-b-slate-400 w-full mt-1"
                        v-model="isbn"
                        id="isbnbrave"
                        :tabindex="this.alert ? -1 : 0"
                      />
                    </div>
                    <div class="mb-6">
                      <label for="nameBrave" class="text-xs m-0 text-[#101827]"
                        >Name of Book</label
                      >
                      <input
                        type="text"
                        class="border-b-[0.8px] border-b-slate-400 w-full mt-1"
                        id="nameBrave"
                        v-model="bookTitle"
                        :tabindex="this.alert ? -1 : 0"
                      />
                    </div>
                    <div>
                      <label for="descEdit" class="text-xs m-0 text-[#101827]"
                        >Book Description</label
                      >
                      <textarea
                        id="descEdit"
                        class="max-h-[80px]border-t-[1px] border-[1px] p-2 overflow-scroll rounded-lg w-full"
                        :tabindex="this.alert ? -1 : 0"
                        >{{ description }}</textarea
                      >
                    </div>
                  </div>
                  <div>
                    <fieldset>
                      <legend class="text-xs m-0 text-[#101827]">
                        List of User Types:
                      </legend>
                      <div
                        class="h-[200px] border-t-[1px] border-[1px] p-4 overflow-scroll rounded-lg"
                      >
                        <div class="w-full border-b-[0.5px] flex p-2 mb-2">
                          <input
                            type="checkbox"
                            class="mr-2 border-slate-600"
                            id="braveAll"
                            :tabindex="this.alert ? -1 : 0"
                          />
                          <label for="braveAll" class="text-sm text-slate-600"
                            >Select All User Types</label
                          >
                        </div>
                        <div class="grid grid-cols-2">
                          <div class="flex p-2" v-for="(item, index) in types">
                            <input
                              type="checkbox"
                              class="mr-2"
                              :checked="this.users.includes(index)"
                              :id="'edit'+ index"
                              :tabindex="this.alert ? -1 : 0"
                            />
                            <label :for="'edit'+ index" class="text-sm">{{
                              item
                            }}</label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                <!-- Modal footer -->
                <div
                  class="w-full flex items-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
                >
                  <button
                    type="button"
                    class="ml-auto h-[40px] w-[100px] rounded-lg text-sm font-medium px-5 py-2.5 bg-slate-300 text-black hover:bg-slate-200 border border-slate-300"
                    @click="editContents('cancel')"
                    :tabindex="this.alert ? -1 : 0"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="float-right right-0 h-[40px] w-[100px] text-white bg-[#1C4E9A] hover:bg-[#0053B7] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    @click="open('alert')"
                    :tabindex="this.alert ? -1 : 0"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--Modal Alert-->
        <div
          class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex items-center justify-center"
          :class="alert ? '' : 'hidden'"
        >
          <div
            class="relative w-full max-w-lg max-h-full rounded-lg text-black"
          >
            <div class="relative rounded-lg shadow  bg-[#323e53]">
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                @click="closeModal('alert')"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
              <div class="p-6 text-center">
                <svg
                  class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h3 class="mb-5 text-lg font-normal text-gray-200">
                  Are you sure you want to {{ action }} this book?
                </h3>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  class="text-white bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-600 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                  @click="submit"
                >
                  Yes, I'm sure
                </button>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  class="text-gray-500 text-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  @click="closeModal('alert')"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import useValidate from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";
import Swal from "sweetalert2";

export default defineComponent({
  data() {
    return {
      index: "",
      add: false,
      view: false,
      backdrop: false,
      action: "delete",
      alert: false,
      title: "Books",
      editTitle: "",
      v$: useValidate(),
      isbn: "",
      bookTitle: "",
      description: "",
      isbnRequired: false,
      titleRequired: false,
      lengthError: false,
      users: [],
      books: [
        {
          id: 1,
          isbn: 9781402894626,
          title: "Brave New World",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          users: [0, 1, 4],
        },
        {
          id: 2,
          isbn: 1341676512356,
          title: "Abstract Algebra and Famous Impossibilities",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
          users: [0, 1, 3, 5],
        },
        {
          id: 3,
          isbn: 1221405614636,
          title: "H.O.R.S.E.: A Game of Basketball and Imagination",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          users: [0, 1, 3],
        },
      ],
      types: [
        "Super Admin",
        "Content Admin",
        "Human Resource",
        "Education",
        "English",
        "Academic",
      ],
      data: [],
      input: "",
      Toast: Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      })
    };
  },
  computed: {
    input() {
      console.log("yp");
      return this.data.filter((w) => w.title.includes(this.input));
    },
  },
  mounted() {
    this.data = this.books;
  },
  methods: {
    loadData() {
      this.data = this.books;
    },
    changeTab(tab) {
      this.activeTab = tab;
    },
    open(modal, index) {
      if (modal === "add") {
        this.title = "Books - Add New Book";
        this.action = "add";
        this.add = true;
      } else if (modal === "alert") {
        this.alert = true;
        this.index = index;
      } else if (modal === "view") {
        this.title = "Books - " + this.books[index].title;
        this.action = "edit";
        this.bookTitle = this.books[index].title;
        this.isbn = this.books[index].isbn;
        this.editTitle = this.books[index].title;
        this.description = this.books[index].description;
        this.users = this.books[index].users;
        this.view = true;
        this.index = index;
      }
      this.backdrop = true;
    },
    closeModal(modal) {
      if (modal === "add") {
        this.add = false;
        this.backdrop = false;
        this.isbn = "";
        this.bookTitle = "";
        this.description = "";
        this.users = [];
        this.isbnRequired = false;
        this.titleRequired = false;
        this.lengthError = false;
        this.v$.$reset();
        this.title = "Books";
      } else if (modal === "alert") {
        this.alert = false;
        if (!this.add && !this.view) {
          this.backdrop = false;
        }
      } else {
        this.view = false;
        this.backdrop = false;
        this.isbn = "";
        this.bookTitle = "";
        this.description = "";
        this.isbnRequired = false;
        this.titleRequired = false;
        this.lengthError = false;
        this.v$.$reset();

        this.title = "Books";
      }
      this.action = "delete";
    },
    clickCheckBox(element) {
      if (this.users.includes(element)) {
        var index = this.users.indexOf(element);
        this.users.splice(index, 1);
      } else {
        this.users.push(element);
      }
    },
    async submit() {
      if (this.add || this.view) {
        this.isbnRequired = false;
        this.titleRequired = false;
        this.lengthError = false;

        await this.v$.$validate();
        if (this.v$.$error) {
          this.v$.$errors.forEach((item) => {
            if (item.$property === "isbn" && item.$validator === "required") {
              this.isbnRequired = true;
            } else if (
              item.$property === "bookTitle" &&
              item.$validator === "required"
            ) {
              this.titleRequired = true;
            } else if (
              item.$validator === "minLength" ||
              item.$validator === "maxLength"
            ) {
              this.lengthError = true;
            }
          });
          if (this.add) {
            document.getElementById("error").focus();
          } else {
            document.getElementById("errorEdit").focus();
          }
        } else {
          if (this.add) {
            this.books.push({
              id: this.books[this.books.length - 1].id + 1,
              title: this.bookTitle,
              isbn: this.isbn,
              description: this.description,
              users: this.users,
            });
            this.add = false;
            this.Toast.fire({
        icon: "success",
        title: "Book has been successfully Added.",
      });
          } else {
            this.books[this.index] = {
              title: this.bookTitle,
              isbn: this.isbn,
              description: this.description,
              users: this.users,
            };
            this.Toast.fire({
        icon: "success",
        title: this.books[this.index].title + " has been successfully Updated.",
      });
            this.loadData();
            this.view = false;
          }

          this.backdrop = false;
        }
      } else {
        this.delete();
        this.backdrop = false;
      }
      this.alert = false;
    },
    delete() {
      this.Toast.fire({
        icon: "success",
        title: this.books[this.index].title + " has been successfully deleted.",
      });

      this.books.splice(this.index, 1);
    },
  },
  validations() {
    return {
      isbn: { required, minLength: minLength(13), maxLength: maxLength(13) },
      bookTitle: { required },
      description: {},
    };
  },
});
</script>
