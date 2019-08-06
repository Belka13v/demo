<template>
    <div id="log">
        <h4>Заполните поля формы входа</h4>
        <el-form :model="logForm" status-icon :rules="rules" ref="logForm" label-width="120px">

            <el-form-item label="Activity name" prop="name">
                <el-input v-model="logForm.name"></el-input>
            </el-form-item>

            <el-form-item label="Password" prop="password">
                <el-input type="password" v-model="logForm.password"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('logForm')">Sign in</el-button>
                <el-button @click="resetForm('logForm')">Reset</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

    import ListPayments from "../components/ListPayments";

    export default {
        name: "Login",
        data() {
            var checkChangeByUser = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please input the Name'));
                } else {

                    callback();
                }
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please input the password'));
                }
                    callback();
            };
            return {
                logForm: {
                    name: '',
                    password: '',
                },
                rules: {
                    name: [
                        {
                            required: true,
                            validator: checkChangeByUser,
                            message: 'Please input Activity name',
                            trigger: 'blur'
                        },
                        {min: 3, max: 7, message: 'Length should be 3 to 7', trigger: 'blur'}
                    ],
                    password: [
                        {validator: validatePass, required: true, message: 'Please input password', trigger: 'blur'}
                    ]
                }
            }
        },
        // mounted(){
        //     this.submitForm('logForm');
        //     this.$http.post('http://localhost:8080/login', {
        //         name: this.logForm.name,
        //         password: this.logForm.password,
        //     })
        //         .then(response => {
        //             let name=response.data.name
        //             alert("Sign in "+name);
        //             this.$http.push('/');
        //         })
        //         .catch(response => {
        //             //debugger
        //             alert(response.status)
        //         })
        //
        // },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert("submitForm");
                      this.$http.post('/login',
                          {name:this.logForm.name,
                                  password: this.logForm.password})
                      .then(response=>{
                                alert(response.data.name)

                            })
                            .catch(response => {
                                //debugger
                                alert(response.status)
                            })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
        }
    }
</script>

<style scoped>
    #log{
        margin: 0 auto;
        border: 3px solid #EEEEEE;
        width: 600px;
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        border-radius: 6px;

    }

    label{
        border: solid 1px #CCCCCC;
        margin-left: 10px;
        padding: 4px;
        outline: 0;
        font-style: revert;
        width: 200px;
        background: #F9A9F9;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
    }

</style>