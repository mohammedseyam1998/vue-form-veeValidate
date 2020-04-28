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
      <div class="row-form mb-2" >
            <div class="row">
              <div class="col-2 mb-3">
                <label>Name </label>
              </div>
              <div class="col-4">
               <validation-provider rules="required" v-slot="{ errors }">
                  <input v-model="value" class="form-control" name="myinput" type="text" />
                  <span class="alert-danger" style="color:red">{{ errors[0] }}</span>
               </validation-provider>
              </div>
              <div class="col-2">
                <select class="browser-default custom-select">
                  <option selected disabled>English</option>
                  <option value="en" selected>English</option>
                  <option value="ar">Arabic</option>
                </select>
              </div>
              <div class="col-1">
                <span class="icon-span mohm"  >
                  <i class="fas fa-minus" style="color: rgb(233, 6, 6);"></i>
                </span>
              </div>
            </div>
          </div>
          <span class="icon-span moh mb-3" >
            <i class="fas fa-plus" style="color: rgb(87, 216, 87)"></i>
          </span>
          <div class="row">
             <div class="col-2 mb-3">
                <label>Group type </label>
              </div>
              <div class="col-7">
              <select class="custom-select" required>
                <option selected disabled value="">Choose...</option>
                <option>123</option>
              </select>
             </div>
          </div>
          <div class="row">
             <div class="col-2 mb-3">
                <label>Code </label>
              </div>
              <div class="col-7">
              <input type="text" class="form-control" required>
             </div>
          </div>
          <div class="row">
             <div class="col-2 mb-3">
                <label>Nationality</label>
              </div>
              <div class="col-7">
              <select class="custom-select" required>
                <option selected disabled value="">Choose...</option>
                <option>123</option>
              </select>
             </div>
          </div>
          <div class="row">
             <div class="col-2 mb-3">
                <label>Tax Number</label>
              </div>
              <div class="col-7">
              <input type="text" class="form-control" required>
             </div>
          </div>
          <div class="row">
             <div class="col-2 mb-3">
                <label>Salesperson</label>
              </div>
              <div class="col-7">
              <input type="text" class="form-control" required>
             </div>
          </div>
           <div class="row">
             <div class="col-2 mb-3">
                <label>Virtual currencies</label>
              </div>
              <div class="col-7">
              <select class="custom-select" required>
                <option selected disabled value="">Choose...</option>
                <option>123</option>
              </select>
             </div>
          </div>
           <div class="row">
             <div class="col-2 mb-3">
                <label>Sex</label>
              </div>
              <div class="col-7">
              <select class="custom-select" required>
                <option selected disabled value="">Choose...</option>
                <option>123</option>
              </select>
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
  name: 'Home'
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
