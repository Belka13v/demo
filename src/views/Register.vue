<template>
    <div id="reg" >
        <h1>Заполните поля регистрационной формы</h1>
       <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">

         <el-form-item label="Activity name" prop="name">
             <el-input v-model="ruleForm.name"></el-input>
         </el-form-item>

         <el-form-item label="Password" prop="password">
            <el-input type="password" v-model="ruleForm.password"></el-input>
         </el-form-item>

         <el-form-item label="Confirm Password" label-width="150px" prop="checkPass">
             <el-input type="password" v-model="ruleForm.checkPass"></el-input>
         </el-form-item>

         <el-form-item label="You are a ?" prop="info">
         <el-radio-group v-model="ruleForm.info">
             <el-radio label="Spender"></el-radio>
             <el-radio label="Miser"></el-radio>
         </el-radio-group>
         </el-form-item>

         <el-form-item label="Active wallet" prop="account.name">
             <el-input v-model="ruleForm.account.name"></el-input>
         </el-form-item>

         <el-form-item label="Wallet balance" prop="account.balance">
             <el-input v-model.number="ruleForm.account.balance"></el-input>
         </el-form-item>

         <el-form-item label="Currency type" prop="account.currency">
             <el-radio-group v-model="ruleForm.account.currency">
                 <el-radio label="UAR"></el-radio>
                 <el-radio label="USD"></el-radio>
             </el-radio-group>
         </el-form-item>

         <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">Register</el-button>
              <el-button @click="resetForm('ruleForm')">Reset</el-button>
         </el-form-item>
     </el-form>
    </div>
</template>

<script>

    export default {
        name: "Register",
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
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please input the password again'));
                } else if (value !== this.ruleForm.password) {
                    callback(new Error('Two inputs don\'t match!'));
                } else {
                    callback();
                }
            };
            var checkBalance = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('Please input the Balance'));
                }
                else {
                    if (!Number.isInteger(value)) {
                        callback(new Error('Please input digits'));
                    } else {
                        if (value < 1000) {
                            callback(new Error('\n' +
                                'Wallet balance cannot be less than 1000 ue'));
                        } else {
                            callback();
                        }
                    }
                }
            };
            return {
                ruleForm: {
                    name: '',
                    info: '',
                    password: '',
                    account: {
                        name: '',
                        balance: '',
                        currency: ''
                    },
                    value:false
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
                    info: [
                        {required: true, message: 'Please select a feature from the proposed', trigger: 'change'}
                    ],
                    password: [
                        {validator: validatePass, required: true, message: 'Please input password', trigger: 'blur'}
                    ],
                    checkPass: [
                        {validator: validatePass2, required: true, message: 'Repeat password again', trigger: 'blur'}
                    ],
                    account: {
                        name: [
                            {required: true, message: 'Please input name Activity wallet', trigger: 'blur'}
                        ],
                        balance: [
                            {
                                validator: checkBalance,
                                required: true,
                                message: 'Please input Balance',
                                trigger: 'blur'
                            }
                        ],
                        currency: [
                            {required: true, message: 'Please select currency type', trigger: 'change'}
                        ]
                    },
                },
            }
        },
        // mounted() {
//   axios.get('api/payments')
//           .then(response => {
//             this.payments = response.data
//           })
//           .catch(response => {
//             debugger
//             alert(response.status)
//           })
// },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert("submitForm");
                        this.$http.post('api/users', {
                            name: this.ruleForm.name,
                            info: this.ruleForm.info,
                            password: this.ruleForm.password,
                            accountDto: {
                                name: this.ruleForm.account.name,
                                balance: this.ruleForm.account.balance,
                                currency: this.ruleForm.account.currency
                            }
                        })
                            .then(response => {
                                let name=response.data.name;
                                this.ruleForm.value=true;
                                alert("Created an entry for "+name);

                            })
                            .catch(response => {
                                this.ruleForm.value=false;
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
#reg{
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