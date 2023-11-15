<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
    </Head>
    <NuxtLayout>
      <SectionTool @clickButton="open('add')" />
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
                    value="Select All Books"
                  />
                </td>
                <th scope="col" class="px-6 py-3">ISBN</th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">Book Name</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">User Types</div>
                </th>
                <th scope="col" class="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="px-2 py-2">
                  <input type="checkbox" id="brace" />
                </td>
                <td scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                  978-1-4028-9462-6
                </td>
                <td class="px-6 py-4">
                  <label for="brave">Brave New World</label>
                </td>
                <td class="px-6 py-4">
                  <ol>
                    <li>Super Admin</li>
                    <li>Content Admin</li>
                    <li>English</li>
                  </ol>
                </td>
                <td class="px-6 py-4 text-right">
                  <button @click="open('view')">
                    <font-awesome-icon
                      icon="pen-to-square"
                      class="p-1 text-[#0053B7]"
                    />
                    <span class="sr-only">Edit</span>
                  </button>
                  <button @click="open('alert')">
                    <font-awesome-icon
                      icon="trash-can"
                      class="p-1 text-red-800"
                    />
                    <span class="sr-only">Delete</span>
                  </button>
                </td>
              </tr>
              <tr class="border-b">
                <td class="px-2 py-2"><input type="checkbox" id="math" /></td>
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                  134-1-6765-1235-6
                </th>
                <td class="px-6 py-4">
                  <label for="math"
                    >Abstract Algebra and Famous Impossibilities</label
                  >
                </td>
                <td class="px-6 py-4">
                  <ol>
                    <li>Super Admin</li>
                    <li>Content Admin</li>
                    <li>Academic</li>
                    <li>Education</li>
                  </ol>
                </td>
                <td class="px-6 py-4 text-right">
                  <button @click="open('view')">
                    <font-awesome-icon
                      icon="pen-to-square"
                      class="p-1 text-[#0053B7]"
                    />
                    <span class="sr-only">Edit</span>
                  </button>
                  <button @click="open('alert')">
                    <font-awesome-icon
                      icon="trash-can"
                      class="p-1 text-red-800"
                    />
                    <span class="sr-only">Delete</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td class="px-2 py-2"><input type="checkbox" id="horse" /></td>
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                  122-1-4056-1463-6
                </th>
                <td class="px-6 py-4">
                  <label for="horse"
                    >H.O.R.S.E.: A Game of Basketball and Imagination</label
                  >
                </td>
                <td class="px-6 py-4">
                  <ol>
                    <li>Super Admin</li>
                    <li>Content Admin</li>
                    <li>Education</li>
                  </ol>
                </td>
                <td class="px-6 py-4 text-right">
                  <button @click="open('view')">
                    <font-awesome-icon
                      icon="pen-to-square"
                      class="p-1 text-[#0053B7]"
                    />
                    <span class="sr-only">Edit</span>
                  </button>
                  <button @click="open('alert')">
                    <font-awesome-icon
                      icon="trash-can"
                      class="p-1 text-red-800"
                    />
                    <span class="sr-only">Delete</span>
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
            class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex items-center justify-center"
            :class="add ? '' : 'hidden'"
          >
            <div
              class="relative w-full max-w-2xl max-h-full bg-white rounded-lg text-black"
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

                  <!-- <div
                    class="text-sm font-medium text-center text-gray-500 border-b border-slate-400 dark:text-gray-400"
                  >
                    <ul class="flex flex-wrap -mb-px">
                      <li class="mr-2" @click="changeTab('content')">
                        <a
                          href="#"
                          class="inline-block p-4 rounded-t-lg"
                          :class="
                            activeTab === 'content'
                              ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500'
                              : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                          "
                          >Contents</a
                        >
                      </li>
                      <li class="mr-2" @click="changeTab('access')">
                        <a
                          href="#"
                          class="inline-block p-4 rounded-t-lg"
                          :class="
                            activeTab === 'access'
                              ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500'
                              : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                          "
                          >User Access</a
                        >
                      </li>
                    </ul>
                  </div> -->
                </div>
                <!-- Modal body-->
                <div class="p-6">
                  <div>
                    <div class="mb-6">
                      <p class="text-xs m-0 text-[#101827]">
                        Internation Standard Book Number (ISBN)
                      </p>
                      <input
                        type="text"
                        class="border-b-[0.8px] border-b-slate-400 w-full mt-1"
                        placeholder="ex. 978-1-4028-9462-6"
                      />
                    </div>
                    <div class="mb-6">
                      <p class="text-xs m-0 text-[#101827]">Name of Book</p>
                      <input
                        type="text"
                        class="border-b-[0.8px] border-b-slate-400 w-full mt-1"
                        placeholder="ex. A Programmer's Guide to Proper Coding Standards"
                      />
                    </div>
                    <div>
                      <p class="text-xs m-0 text-[#101827]">Description</p>
                      <textarea
                        class="max-h-[100px] border-t-[1px] border-[1px] p-2 overflow-scroll rounded-lg w-full"
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
                          />
                          <label for="addAll" class="text-sm text-slate-600"
                            >All</label
                          >
                        </div>
                        <div class="grid grid-cols-2">
                          <div class="flex p-2">
                            <input type="checkbox" class="mr-2" id="addSA" />
                            <label for="addSA" class="text-sm"
                              >Super Admin</label
                            >
                          </div>
                          <div class="flex p-2">
                            <input type="checkbox" class="mr-2" id="addCA" />
                            <label for="addCA" class="text-sm"
                              >Content Admin</label
                            >
                          </div>
                          <div class="flex p-2">
                            <input type="checkbox" class="mr-2" id="addHR" />
                            <label for="HR" class="text-sm"
                              >Human Resource</label
                            >
                          </div>
                          <div class="flex p-2">
                            <input type="checkbox" class="mr-2" id="addED" />
                            <label for="addED" class="text-sm">Education</label>
                          </div>
                          <div class="flex p-2">
                            <input type="checkbox" class="mr-2" id="addENG" />
                            <label for="addENG" class="text-sm">English</label>
                          </div>
                          <div class="flex p-2">
                            <input type="checkbox" class="mr-2" id="addAC" />
                            <label for="addAC" class="text-sm">Academic</label>
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
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="h-[40px] w-[120px] text-white bg-[#1C4E9A] hover:bg-[#0053B7] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    @click="open('alert')"
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
              class="relative w-full max-w-2xl max-h-full bg-white rounded-lg text-black"
            >
              <div class="relative rounded-lg shadow">
                <div>
                  <div
                    class="flex items-start justify-between p-4 pb-1 rounded-t border-b border-slate-400"
                  >
                    <h2 class="text-xl font-semibold text-gray-900">
                      Edit Book: Brave New World
                    </h2>
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      @click="closeModal('view')"
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

                  <!-- <div
                    class="flex text-sm font-medium text-center text-gray-500 border-b border-slate-400 dark:text-gray-400"
                  >
                    <div class="w-full">
                      <ul class="flex flex-wrap -mb-px">
                        <li class="mr-2" @click="changeTab('content')">
                          <a
                            href="#"
                            class="inline-block p-4 rounded-t-lg"
                            :class="
                              activeTab === 'content'
                                ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500'
                                : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                            "
                            >Contents</a
                          >
                        </li>
                        <li class="mr-2" @click="changeTab('access')">
                          <a
                            href="#"
                            class="inline-block p-4 rounded-t-lg"
                            :class="
                              activeTab === 'access'
                                ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500'
                                : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                            "
                            >User Access</a
                          >
                        </li>
                      </ul>
                    </div>
                    <button class="mr-3" @click="editContents()">
                      <font-awesome-icon
                        icon="pen-to-square"
                        size="xl"
                        class="p-1 text-[#1DCADA]"
                      />
                    </button>
                  </div> -->
                </div>
                <!-- Modal body-->
                <div class="p-6">
                  <div>
                    <div class="mb-6">
                      <label for="isbnbrave" class="text-xs m-0 text-[#101827]">
                        Internation Standard Book Number (ISBN)
                      </label>
                      <input
                        type="text"
                        class="border-b-[0.8px] border-b-slate-400 w-full mt-1"
                        value="978-1-4028-9462-6"
                        id="isbnbrave"
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
                        value="Brave New World"
                      />
                    </div>
                    <div>
                      <p class="text-xs m-0 text-[#101827]">Description</p>
                      <textarea
                        class="max-h-[80px]border-t-[1px] border-[1px] p-2 overflow-scroll rounded-lg w-full"
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </textarea
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
                          />
                          <label for="braveAll" class="text-sm text-slate-600">All</label>
                        </div>
                        <div class="grid grid-cols-2">
                          <div class="flex p-2">
                            <input type="checkbox" class="mr-2" checked id="braveSA"/>
                            <label for="braveSA" class="text-sm">Super Admin</label>
                          </div>
                          <div class="flex p-2">
                            <input type="checkbox" class="mr-2" checked id="braveCA"/>
                            <label for="braveCA" class="text-sm">Content Admin</label>
                          </div>
                          <div class="flex p-2">
                            <input type="checkbox" class="mr-2" id="braveHR" />
                            <label for="braveHR" class="text-sm">Human Resource</label>
                          </div>
                          <div class="flex p-2">
                            <input type="checkbox" class="mr-2" id="braveED"/>
                            <label for="braveED" class="text-sm">Education</label>
                          </div>
                          <div class="flex p-2">
                            <input type="checkbox" class="mr-2" checked id="braveENG"/>
                            <label for="braveENG" class="text-sm">English</label>
                          </div>
                          <div class="flex p-2">
                            <input type="checkbox" class="mr-2" id="braveAC"/>
                            <label for="braveAC" class="text-sm">Academic</label>
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
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="float-right right-0 h-[40px] w-[100px] text-white bg-[#1C4E9A] hover:bg-[#0053B7] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    @click="open('alert')"
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
            class="relative w-full max-w-lg max-h-full bg-white rounded-lg text-black"
          >
            <div class="relative rounded-lg shadow bg-white dark:bg-gray-700">
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
                <h3
                  class="mb-5 text-lg font-normal text-gray-200"
                >
                  Are you sure you want to {{ action }} this book?
                </h3>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  class="text-white bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Yes, I'm sure
                </button>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  class="text-gray-500 text-white bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
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

export default defineComponent({
  data() {
    return {
      activeTab: "content",
      add: false,
      view: false,
      edit: false,
      backdrop: false,
      action: "delete",
      alert: false,
      title: "Books",
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    },
    open(modal) {
      if (modal === "add") {
        this.action = "add";
        this.add = true;
      } else if (modal === "alert") {
        this.alert = true;
      } else {
        this.action = "edit";
        this.view = true;
      }
      this.backdrop = true;
    },
    closeModal(modal) {
      if (modal === "add") {
        this.add = false;
        this.backdrop = false;
      } else if (modal === "alert") {
        this.alert = false;
        if (!this.add && !this.view) {
          this.backdrop = false;
        }
      } else {
        this.view = false;
        this.backdrop = false;
      }
      this.action="delete";
    },
    editContents(source) {
      if (source === "cancel") {
        this.edit = false;
      } else {
        this.edit = !this.edit;
      }
    },
  },
});
</script>
