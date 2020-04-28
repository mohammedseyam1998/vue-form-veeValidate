<template>
  <div class="home">
    <ul class="nav nav-tabs nav-justified mb-3" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"> <i class="far fa-user-circle"></i> Personal data
</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"> <i class="fas fa-envelope"></i> Contact Data
</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false"> <i class="fas fa-coins"></i> Financial data
</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false"> <i class="fas fa-map-marked-alt"></i> Address data
</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" style="padding-top: 10px;" role="tabpanel" aria-labelledby="home-tab">
     <ValidationObserver ref="form">
       <form @submit.prevent="onSubmit">
        <div class="row-form mb-2" v-for="(name, i) in newRow" :key="i" >
            <div class="row">
              <div class="col-2 mb-3">
                <label>Name </label>
              </div>
              <div class="col-4">
               <validation-provider rules="required" v-slot="{ errors }">
                  <input v-model="username" class="form-control" name="myinput" type="text" />
                  <span class="alert-danger" style="color:red">{{ errors[0] }}</span>
               </validation-provider>
              </div>
              <div class="col-2">
               <ValidationProvider rules="required" v-slot="{ errors }">
                        <select name="language" v-model="Lang" class="browser-default custom-select">
                          <option selected disabled>English</option>
                          <option value="en">Arabic</option>
                          <option value="ar">spanish</option>
                        </select>
                        <span class="alert-danger" style="color:red" >{{ errors[0] }}</span>
                      </ValidationProvider>
              </div>
              <div class="col-1">
                <span class="icon-span mohm" @click="deleteRow(i, name)" >
                  <i class="fas fa-minus" style="color: rgb(233, 6, 6);"></i>
                </span>
              </div>
            </div>
          </div>
          <span class="icon-span moh mb-3" @click="addNewRow" >
            <i class="fas fa-plus" style="color: rgb(87, 216, 87)"></i>
          </span>
          <div class="row">
             <div class="col-2 mb-3">
                <label>Group type </label>
              </div>
              <div class="col-7">
              <ValidationProvider rules="required" v-slot="{ errors }">
                        <select name="group-type" v-model="groupType" class="browser-default custom-select" >
                          <option selected disabled>Group Type</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                        <span class="alert-danger" style="color:red">{{ errors[0] }}</span>
                      </ValidationProvider>
             </div>
          </div>
          <div class="row">
             <div class="col-2 mb-3">
                <label>Code </label>
              </div>
              <div class="col-7">
              <validation-provider rules="required" v-slot="{ errors }">
                        <input
                          class="form-control"
                          v-model="code"
                          name="code"
                          type="text"
                          placeholder="Please enter the code"
                        />
                        <span class="alert-danger" style="color:red">{{ errors[0] }}</span>
                      </validation-provider>
             </div>
          </div>
          <div class="row">
             <div class="col-2 mb-3">
                <label>Nationality</label>
              </div>
              <div class="col-7">
              <ValidationProvider rules="required" v-slot="{ errors }">
                        <select
                          name="nationality"
                          v-model="nationality"
                          class="browser-default custom-select"
                        >
                          <option selected disabled>Nationality</option>
                          <option value="palestinian">palestinian</option>
                          <option value="usa">USA</option>
                        </select>
                        <span class="alert-danger" style="color:red">{{ errors[0] }}</span>
                      </ValidationProvider>
             </div>
          </div>
          <div class="row">
             <div class="col-2 mb-3">
                <label>Tax Number</label>
              </div>
              <div class="col-7">
               <validation-provider rules="required" v-slot="{ errors }">
                        <input
                          class="form-control"
                          v-model="taxNumber"
                          name="taxNumber"
                          type="text"
                          placeholder="Enter the tax number"
                        />
                        <span class="alert-danger" style="color:red">{{ errors[0] }}</span>
                      </validation-provider>
             </div>
          </div>
          <div class="row">
             <div class="col-2 mb-3">
                <label>Salesperson</label>
              </div>
              <div class="col-7">
              <validation-provider rules="required" v-slot="{ errors }">
                        <input
                          class="form-control"
                          v-model="salesPerson"
                          name="salesPerson"
                          type="text"
                          placeholder="Enter the sales person name "
                        />
                        <span class="alert-danger" style="color:red">{{ errors[0] }}</span>
                      </validation-provider>
             </div>
          </div>
           <div class="row">
             <div class="col-2 mb-3">
                <label>Virtual currencies</label>
              </div>
              <div class="col-7">
              <ValidationProvider rules="required" v-slot="{ errors }">
                        <select
                          name="virtualCurrency"
                          v-model="virtualCurrency"
                          class="browser-default custom-select"
                        >
                          <option selected disabled>virtualCurrency</option>
                          <option value="Dollar">Dollar</option>
                          <option value="shikel">shikel</option>
                        </select>
                        <span class="alert-danger" style="color:red">{{ errors[0] }}</span>
                      </ValidationProvider>
             </div>
          </div>
           <div class="row">
             <div class="col-2 mb-3">
                <label>Sex</label>
              </div>
              <div class="col-7">
               <ValidationProvider rules="required" v-slot="{ errors }">
                        <select
                          name="sex"
                          v-model="gender"
                          class="browser-default custom-select"
                        >
                          <option selected disabled>Sex</option>
                          <option value="male">male</option>
                          <option value="female">female</option>
                        </select>
                        <span class="alert-danger" style="color:red">{{ errors[0] }}</span>
                      </ValidationProvider>
             </div>
          </div>
           <div class="row">
             <div class="col-2 mb-3">
                <label>Start Date</label>
              </div>
              <div class="col-7">
              <input type="text" class="form-control" required>
             </div>
          </div>
          <div class="row">
            <div class="col-md-3 mt-3">
              <button type="button" class="btn btn-light mr-3 px-4">Reset </button>
              <button type="button" class="btn btn-primary px-4 ">Send</button>
             </div>
          </div>
           </form>
          </ValidationObserver>
  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  data(){
    return{
       newRow: [
        {
          username:"",
          Lang: "",
        }
      ],
      Lang: "",
      username: "",
      groupType: "",
      code: "",
      nationality: "",
      taxNumber: null,
      salesPerson: "",
      virtualCurrency: "",
      gender: "",
      myStartDate: null
    }
    },
    methods: {
    addNewRow() {
      this.newRow.push({
        selectLang: "",
        nameField: ""
      });
    },
    deleteRow(i) {
      if (i > 0) {
        this.newRow.splice(i, 1);
      }
    },
  }
}
</script>
<style >
.home{
  width: 70%;
  margin: 0 auto;
}
.nav-item{
  font-weight: bold;
}
label{
      font-weight: bold;

}
.row{
 text-align: initial;

}
.moh {
  border: 0.5px solid rgb(87, 216, 87);
  height: 35px;
  width: 35px;
  border-radius: 50%;
  text-align: center;
  display: block;
  margin: auto;
  cursor: pointer;
  line-height: 35px;
}
.mohm{
  border: 0.5px solid rgb(233, 6, 6);
  height: 35px;
  width: 35px;
  border-radius: 50%;
  text-align: center;
  display: block;
  margin: auto;
  cursor: pointer;
  line-height: 35px;
}

</style>
