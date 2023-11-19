<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
    </Head>
    <NuxtLayout :open="this.add || this.edit || this.alert">
      <SectionTool @clickButton="open('add')" :open="this.add || this.edit || this.alert"/>
      <div class="w-[95%] mt-8 ml-9">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left bg-white">
            <caption class="text-left mb-2">
              List of User Types
            </caption>
            <thead class="text-xs t uppercase bg-gray-50 border-b">
              <tr>
                <td scope="col" class="px-2 py-1 font-medium whitespace-nowrap">
                  <input type="checkbox" aria-label="Select All Books" :tabindex="(this.add || this.edit || this.alert) ? -1 : 0"/>
                </td>
                <th scope="col" class="px-6 py-3">User</th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">Access</div>
                </th>
                <th scope="col" class="px-6 py-3 text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="px-2 py-2">
                  <input type="checkbox" id="SA" aria-label="Super Admin" :tabindex="(this.add || this.edit || this.alert) ? -1 : 0"/>
                </td>
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                  Super Admin
                </th>
                <td class="px-6 py-4">
                  <ol>
                    <li>Read</li>
                    <li>Write</li>
                    <li>Delete</li>
                  </ol>
                </td>
                <td class="px-6 py-4 text-right">
                  <button @click="open('edit')" :tabindex="(this.add || this.edit || this.alert) ? -1 : 0">
                    <font-awesome-icon
                      icon="pen-to-square"
                      class="p-1 text-[#0053B7]"
                    />
                    <span class="sr-only">Super Admin Edit</span>
                  </button>
                  <button @click="open('alert')" :tabindex="(this.add || this.edit || this.alert) ? -1 : 0">
                    <font-awesome-icon
                      icon="trash-can"
                      class="p-1 text-red-800"
                    />
                    <span class="sr-only">Super Admin Delete</span>
                  </button>
                </td>
              </tr>
              <tr class="border-b">
                <td class="px-2 py-2">
                  <input type="checkbox" id="CA" aria-label="Content Admin" :tabindex="(this.add || this.edit || this.alert) ? -1 : 0"/>
                </td>
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                  Content Admin
                </th>
                <td class="px-6 py-4">
                  <ol>
                    <li>Read</li>
                    <li>Write</li>
                    <li>Delete</li>
                  </ol>
                </td>
                <td class="px-6 py-4 text-right">
                  <button @click="open('edit')" :tabindex="(this.add || this.edit || this.alert) ? -1 : 0">
                    <font-awesome-icon
                      icon="pen-to-square"
                      class="p-1 text-[#0053B7]"
                    />
                    <span class="sr-only">Content Admin Edit</span>
                  </button>
                  <button @click="open('alert')" :tabindex="(this.add || this.edit || this.alert) ? -1 : 0">
                    <font-awesome-icon
                      icon="trash-can"
                      class="p-1 text-red-800"
                    />
                    <span class="sr-only">Content Admin Delete</span>
                  </button>
                </td>
              </tr>
              <tr class="border-b">
                <td class="px-2 py-2">
                  <input type="checkbox" id="HR" aria-label="Human Resource" :tabindex="(this.add || this.edit || this.alert) ? -1 : 0"/>
                </td>
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">Human Resource
                </th>
                <td class="px-6 py-4">
                  <ol>
                    <li>Read</li>
                    <li>Write</li>
                  </ol>
                </td>
                <td class="px-6 py-4 text-right">
                  <button @click="open('edit')" :tabindex="(this.add || this.edit || this.alert) ? -1 : 0">
                    <font-awesome-icon
                      icon="pen-to-square"
                      class="p-1 text-[#0053B7]"
                    />
                    <span class="sr-only">Human Resource Edit</span>
                  </button>
                  <button @click="open('alert')" :tabindex="(this.add || this.edit || this.alert) ? -1 : 0">
                    <font-awesome-icon
                      icon="trash-can"
                      class="p-1 text-red-800"
                    />
                    <span class="sr-only">Human Resource Delete</span>
                  </button>
                </td>
              </tr>
              <tr class="border-b">
                <td class="px-2 py-2">
                  <input type="checkbox" id="ED" aria-label="Education" :tabindex="(this.add || this.edit || this.alert) ? -1 : 0"/>
                </td>
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">Education
                </th>
                <td class="px-6 py-4">
                  <ol>
                    <li>Read</li>
                  </ol>
                </td>
                <td class="px-6 py-4 text-right">
                  <button @click="open('edit')" :tabindex="(this.add || this.edit || this.alert) ? -1 : 0">
                    <font-awesome-icon
                      icon="pen-to-square"
                      class="p-1 text-[#0053B7]"
                    />
                    <span class="sr-only">Education Edit</span>
                  </button>
                  <button @click="open('alert')" :tabindex="(this.add || this.edit || this.alert) ? -1 : 0">
                    <font-awesome-icon
                      icon="trash-can"
                      class="p-1 text-red-800"
                    />
                    <span class="sr-only">Education Delete</span>
                  </button>
                </td>
              </tr>
              <tr class="border-b">
                <td class="px-2 py-2">
                  <input type="checkbox" id="EN" aria-label="English" :tabindex="(this.add || this.edit || this.alert) ? -1 : 0"/>
                </td>
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">English
                </th>
                <td class="px-6 py-4">
                  <ol>
                    <li>Read</li>
                  </ol>
                </td>
                <td class="px-6 py-4 text-right">
                  <button @click="open('edit')" :tabindex="(this.add || this.edit || this.alert) ? -1 : 0">
                    <font-awesome-icon
                      icon="pen-to-square"
                      class="p-1 text-[#0053B7]"
                    />
                    <span class="sr-only">English Edit</span>
                  </button>
                  <button @click="open('alert')" :tabindex="(this.add || this.edit || this.alert) ? -1 : 0">
                    <font-awesome-icon
                      icon="trash-can"
                      class="p-1 text-red-800"
                    />
                    <span class="sr-only">English Delete</span>
                  </button>
                </td>
              </tr>
              <tr class="border-b">
                <td class="px-2 py-2">
                  <input type="checkbox" id="AC" aria-label="Academic" :tabindex="(this.add || this.edit || this.alert) ? -1 : 0"/>
                </td>
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">Academic
                </th>
                <td class="px-6 py-4">
                  <ol>
                    <li>Read</li>
                  </ol>
                </td>
                <td class="px-6 py-4 text-right">
                  <button @click="open('edit')" :tabindex="(this.add || this.edit || this.alert) ? -1 : 0">
                    <font-awesome-icon
                      icon="pen-to-square"
                      class="p-1 text-[#0053B7]"
                    />
                    <span class="sr-only">Academic Edit</span>
                  </button>
                  <button @click="open('alert')" :tabindex="(this.add || this.edit || this.alert) ? -1 : 0">
                    <font-awesome-icon
                      icon="trash-can"
                      class="p-1 text-red-800"
                    />
                    <span class="sr-only">Academic Delete</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- Main modal -->
          <div
            class="fixed top-0 left-0 right-0 z-50 w-full h-full bg-black opacity-40"
            :class="backdrop ? '' : 'hidden'"
          ></div>
          <div
            class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex items-center justify-center"
            :class="add ? '' : 'hidden'"
          >
            <div
              class="relative w-full max-w-2xl bg-white rounded-lg text-black"
            >
              <div class="relative rounded-lg shadow">
                <div>
                  <div
                    class="flex items-start justify-between p-4 pb-1 rounded-t border-b-[0.5px] border-black"
                  >
                    <h2 class="text-xl font-semibold text-gray-900">
                      Add New User Type
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
                <!-- Modal body -->
                <div class="p-6">
                  <div v-if="activeTab === 'content'">
                    <div class="mb-6">
                      <label for="user" class="text-xs m-0 text-[#101827]"
                        >User -
                        <i><b class="text-red-700">required</b></i></label
                      >
                      <input
                        type="text"
                        class="border-b-[0.8px] border-b-slate-400 w-full mt-1"
                        id="user"
                        placeholder="example: Super Admin"
                        :tabindex="this.alert ? -1 : 0"
                      />
                    </div>
                    <div>
                      <fieldset>
                        <legend class="text-xs m-0 text-[#101827]">
                          Choose User's Access Rights
                        </legend>
                        <div
                          class="h-[150px] border-t-[1px] border-[1px] p-4 overflow-scroll rounded-lg"
                        >
                          <div class="w-full border-b-[0.5px] flex p-2 mb-2">
                            <input
                              type="checkbox"
                              class="mr-2 border-slate-600"
                              id="addAll"
                              :tabindex="this.alert ? -1 : 0"
                            />
                            <label for="addAll" class="text-sm"
                              >Select All Access Rights</label
                            >
                          </div>
                          <div class="grid grid-cols-3">
                            <div class="flex p-2">
                              <input type="checkbox" class="mr-2" id="addRe" :tabindex="this.alert ? -1 : 0"/>
                              <label for="addRe" class="text-sm">Read</label>
                            </div>
                            <div class="flex p-2">
                              <input type="checkbox" class="mr-2" id="addWr" :tabindex="this.alert ? -1 : 0"/>
                              <label for="addWr" class="text-sm">Write</label>
                            </div>
                            <div class="flex p-2">
                              <input type="checkbox" class="mr-2" id="addDe" :tabindex="this.alert ? -1 : 0"/>
                              <label for="addDe" class="text-sm">Delete</label>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
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
                    class="h-[40px] w-[140px] text-white bg-[#1C4E9A] hover:bg-[#0053B7] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    @click="open('alert')"
                    :tabindex="this.alert ? -1 : 0"
                  >
                    Save User Type
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!--Modal View-->
          <div
            class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex items-center justify-center"
            :class="edit ? '' : 'hidden'"
          >
            <div
              class="relative w-full max-w-2xl max-h-full bg-white rounded-lg text-black"
            >
              <div class="relative rounded-lg shadow">
                <div>
                  <div
                    class="flex items-start justify-between p-4 pb-1 rounded-t border-b-[0.5px] border-black"
                  >
                    <h2 class="text-xl font-semibold text-gray-900">
                      Edit User Type: Super Admin
                    </h2>
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      @click="closeModal('edit')"
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
                <!-- Modal body -->
                <div class="p-6">
                  <div>
                    <div class="mb-6">
                      <label for="superAdmin" class="text-xs m-0 text-[#101827]"
                        >User</label
                      >
                      <input
                        type="text"
                        class="border-b-[0.8px] border-b-slate-400 w-full mt-1"
                        value="Super Admin"
                        id="superAdmin"
                        :tabindex="this.alert ? -1 : 0"
                      />
                    </div>
                    <div>
                      <fieldset>
                        <legend class="text-xs m-0 text-[#101827]">
                          Choose User's Access Rights
                        </legend>
                        <div
                          class="h-[150px] border-t-[1px] border-[1px] p-4 overflow-scroll rounded-lg"
                        >
                          <div class="w-full border-b-[0.5px] flex p-2 mb-2">
                            <input
                              type="checkbox"
                              class="mr-2 border-slate-600"
                              id="saAll"
                              checked
                              :tabindex="this.alert ? -1 : 0"
                            />
                            <label for="saAll" class="text-sm"
                              >Select All Access Rights</label
                            >
                          </div>
                          <div class="grid grid-cols-3">
                            <div class="flex p-2">
                              <input
                                type="checkbox"
                                class="mr-2"
                                id="saRe"
                                checked
                                :tabindex="this.alert ? -1 : 0"
                              />
                              <label for="saRe" class="text-sm">Read</label>
                            </div>
                            <div class="flex p-2">
                              <input
                                type="checkbox"
                                class="mr-2"
                                id="saWr"
                                checked
                                :tabindex="this.alert ? -1 : 0"
                              />
                              <label for="saWr" class="text-sm">Write</label>
                            </div>
                            <div class="flex p-2">
                              <input
                                type="checkbox"
                                class="mr-2"
                                id="saDe"
                                checked
                                :tabindex="this.alert ? -1 : 0"
                              />
                              <label for="saDe" class="text-sm">Delete</label>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <!-- Modal footer -->
                <div
                  class="w-full flex items-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
                >
                  <button
                    type="button"
                    class="ml-auto h-[40px] w-[100px] rounded-lg text-sm font-medium px-5 py-2.5 bg-slate-300 text-black hover:bg-slate-200 border border-slate-300"
                    @click="closeModal('edit')"
                    :tabindex="this.alert ? -1 : 0"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="h-[40px] w-[100px] text-white bg-[#1C4E9A] hover:bg-[#0053B7] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
            class="relative w-full max-w-lg max-h-full bg-white rounded-lg text-black"
          >
            <div class="relative rounded-lg shadow bg-white dark:bg-gray-700">
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
                  Are you sure you want to {{ action }} this user type?
                </h3>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  class="text-white bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-600 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
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
      edit: false,
      alert: false,
      backdrop: false,
      action: "delete",
      title: "User Types",
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    },
    open(modal) {
      if (modal === "add") {
        this.action = "add";
        this.title = "User Types - Add New User Type"
        this.add = true;
      } else if (modal === "alert") {
        this.alert = true;
      } else {
        this.action = "edit";
        this.title = "User Types - Edit Super Admin"
        this.edit = true;
      }
      this.backdrop = true;
    },
    closeModal(modal) {
      if (modal === "add") {
        this.add = false;
        this.backdrop = false;
      } else if (modal === "alert") {
        this.alert = false;
        if (!this.add && !this.edit) {
          this.backdrop = false;
        }
      } else {
        this.edit = false;
        this.backdrop = false;
      }
      this.action = "delete";
      this.title = "User Types"
    },
  },
});
</script>
