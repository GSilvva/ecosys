<template>
  <main class="client-area pt-sm">
    <div class="content pt-7 sm:pt-16 pb-8 sm:pb-0">
      <ElementsContainer block>
        <article class="box box--form flex justify-between w-full m-auto bg-transparent sm:bg-white" v-if="!validPhone && !validCode">
          <aside class="sm:p-10 w-full">
            <header>
              <h2 class="mb-4 sm:mb-6 uppercase">Entrar</h2>
              <p class="mb-8 max-w-xs w-full">Insira seu número de celular para receber um código de verificação.</p>
            </header>
            <form @submit.prevent="validPhone = true">
              <ElementsFormLabel label="Celular" />
              <div class="flex items-end mb-6 w-full">
                <div class="ddi">
                    <select name="ddi" id="ddi">
                      <option value="55">BR (+55)</option>
                      <option value="213">DZ (+213)</option>
                      <option value="376">AD (+376)</option>
                      <option value="244">AO (+244)</option>
                      <option value="1264">AI (+1264)</option>
                      <option value="1268">AG (+1268)</option>
                      <option value="54">AR (+54)</option>
                      <option value="374">AM (+374)</option>
                      <option value="297">AW (+297)</option>
                      <option value="61">AU (+61)</option>
                      <option value="43">AT (+43)</option>
                      <option value="994">AZ (+994)</option>
                      <option value="1242">BS (+1242)</option>
                      <option value="973">BH (+973)</option>
                      <option value="880">BD (+880)</option>
                      <option value="1246">BB (+1246)</option>
                      <option value="375">BY (+375)</option>
                      <option value="32">BE (+32)</option>
                      <option value="501">BZ (+501)</option>
                      <option value="229">BJ (+229)</option>
                      <option value="1441">BM (+1441)</option>
                      <option value="975">BT (+975)</option>
                      <option value="591">BO (+591)</option>
                      <option value="387">BA (+387)</option>
                      <option value="267">BW (+267)</option>
                      <option value="673">BN (+673)</option>
                      <option value="359">BG (+359)</option>
                      <option value="226">BF (+226)</option>
                      <option value="257">BI (+257)</option>
                      <option value="855">KH (+855)</option>
                      <option value="237">CM (+237)</option>
                      <option value="1">CA (+1)</option>
                      <option value="238">CV (+238)</option>
                      <option value="1345">KY (+1345)</option>
                      <option value="236">CF (+236)</option>
                      <option value="56">CL (+56)</option>
                      <option value="86">CN (+86)</option>
                      <option value="57">CO (+57)</option>
                      <option value="269">KM (+269)</option>
                      <option value="242">CG (+242)</option>
                      <option value="682">CK (+682)</option>
                      <option value="506">CR (+506)</option>
                      <option value="385">HRV (+385)</option>
                      <option value="53">CU (+53)</option>
                      <option value="90392">CY (+90392)</option>
                      <option value="357">CY (+357)</option>
                      <option value="42">CZ (+42)</option>
                      <option value="45">DK (+45)</option>
                      <option value="253">DJ (+253)</option>
                      <option value="1809">DM (+1809)</option>
                      <option value="1809">DO (+1809)</option>
                      <option value="593">EC (+593)</option>
                      <option value="20">EG (+20)</option>
                      <option value="503">SV (+503)</option>
                      <option value="240">GQ (+240)</option>
                      <option value="291">ER (+291)</option>
                      <option value="372">EE (+372)</option>
                      <option value="251">ET (+251)</option>
                      <option value="500">FK (+500)</option>
                      <option value="298">FO (+298)</option>
                      <option value="679">FJ (+679)</option>
                      <option value="358">FI (+358)</option>
                      <option value="33">FR (+33)</option>
                      <option value="594">GF (+594)</option>
                      <option value="689">PF (+689)</option>
                      <option value="241">GA (+241)</option>
                      <option value="220">GM (+220)</option>
                      <option value="7880">GE (+7880)</option>
                      <option value="49">DE (+49)</option>
                      <option value="233">GH (+233)</option>
                      <option value="350">GI (+350)</option>
                      <option value="30">GR (+30)</option>
                      <option value="299">GL (+299)</option>
                      <option value="1473">GD (+1473)</option>
                      <option value="590">GP (+590)</option>
                      <option value="671">GU (+671)</option>
                      <option value="502">GT (+502)</option>
                      <option value="224">GN (+224)</option>
                      <option value="245">GW (+245)</option>
                      <option value="592">GY (+592)</option>
                      <option value="509">HT (+509)</option>
                      <option value="504">HN (+504)</option>
                      <option value="852">HK (+852)</option>
                      <option value="36">HU (+36)</option>
                      <option value="354">IS (+354)</option>
                      <option value="91">IN (+91)</option>
                      <option value="62">ID (+62)</option>
                      <option value="98">IR (+98)</option>
                      <option value="964">IQ (+964)</option>
                      <option value="353">IE (+353)</option>
                      <option value="972">IL (+972)</option>
                      <option value="39">IT (+39)</option>
                      <option value="1876">JM (+1876)</option>
                      <option value="81">JP (+81)</option>
                      <option value="962">JO (+962)</option>
                      <option value="7">KZ (+7)</option>
                      <option value="254">KE (+254)</option>
                      <option value="686">KI (+686)</option>
                      <option value="850">KP (+850)</option>
                      <option value="82">KR (+82)</option>
                      <option value="965">KW (+965)</option>
                      <option value="996">KG (+996)</option>
                      <option value="856">LA (+856)</option>
                      <option value="371">LV (+371)</option>
                      <option value="961">LB (+961)</option>
                      <option value="266">LS (+266)</option>
                      <option value="231">LR (+231)</option>
                      <option value="218">LY (+218)</option>
                      <option value="417">LI (+417)</option>
                      <option value="370">LT (+370)</option>
                      <option value="352">LU (+352)</option>
                      <option value="853">MO (+853)</option>
                      <option value="389">MK (+389)</option>
                      <option value="261">MG (+261)</option>
                      <option value="265">MW (+265)</option>
                      <option value="60">MY (+60)</option>
                      <option value="960">MV (+960)</option>
                      <option value="223">ML (+223)</option>
                      <option value="356">MT (+356)</option>
                      <option value="692">MH (+692)</option>
                      <option value="596">MQ (+596)</option>
                      <option value="222">MR (+222)</option>
                      <option value="269">YT (+269)</option>
                      <option value="52">MX (+52)</option>
                      <option value="691">FM (+691)</option>
                      <option value="373">MD (+373)</option>
                      <option value="377">MC (+377)</option>
                      <option value="976">MN (+976)</option>
                      <option value="1664">MS (+1664)</option>
                      <option value="212">MA (+212)</option>
                      <option value="258">MZ (+258)</option>
                      <option value="95">MN (+95)</option>
                      <option value="264">NA (+264)</option>
                      <option value="674">NR (+674)</option>
                      <option value="977">NP (+977)</option>
                      <option value="31">NL (+31)</option>
                      <option value="687">NC (+687)</option>
                      <option value="64">NZ (+64)</option>
                      <option value="505">NI (+505)</option>
                      <option value="227">NE (+227)</option>
                      <option value="234">NG (+234)</option>
                      <option value="683">NU (+683)</option>
                      <option value="672">NF (+672)</option>
                      <option value="670">NP (+670)</option>
                      <option value="47">NO (+47)</option>
                      <option value="968">OM (+968)</option>
                      <option value="680">PW (+680)</option>
                      <option value="507">PA (+507)</option>
                      <option value="675">PG (+675)</option>
                      <option value="595">PY (+595)</option>
                      <option value="51">PE (+51)</option>
                      <option value="63">PH (+63)</option>
                      <option value="48">PL (+48)</option>
                      <option value="351">PT (+351)</option>
                      <option value="1787">PR (+1787)</option>
                      <option value="974">QA (+974)</option>
                      <option value="262">RE (+262)</option>
                      <option value="40">RO (+40)</option>
                      <option value="7">RU (+7)</option>
                      <option value="250">RW (+250)</option>
                      <option value="378">SM (+378)</option>
                      <option value="239">ST (+239)</option>
                      <option value="966">SA (+966)</option>
                      <option value="221">SN (+221)</option>
                      <option value="381">CS (+381)</option>
                      <option value="248">SC (+248)</option>
                      <option value="232">SL (+232)</option>
                      <option value="65">SG (+65)</option>
                      <option value="421">SK (+421)</option>
                      <option value="386">SI (+386)</option>
                      <option value="677">SB (+677)</option>
                      <option value="252">SO (+252)</option>
                      <option value="27">ZA (+27)</option>
                      <option value="34">ES (+34)</option>
                      <option value="94">LK (+94)</option>
                      <option value="290">SH (+290)</option>
                      <option value="1869">KN (+1869)</option>
                      <option value="1758">SC (+1758)</option>
                      <option value="249">SD (+249)</option>
                      <option value="597">SR (+597)</option>
                      <option value="268">SZ (+268)</option>
                      <option value="46">SE (+46)</option>
                      <option value="41">CH (+41)</option>
                      <option value="963">SI (+963)</option>
                      <option value="886">TW (+886)</option>
                      <option value="7">TJ (+7)</option>
                      <option value="66">TH (+66)</option>
                      <option value="228">TG (+228)</option>
                      <option value="676">TO (+676)</option>
                      <option value="1868">TT (+1868)</option>
                      <option value="216">TN (+216)</option>
                      <option value="90">TR (+90)</option>
                      <option value="7">TM (+7)</option>
                      <option value="993">TM (+993)</option>
                      <option value="1649">TC (+1649)</option>
                      <option value="688">TV (+688)</option>
                      <option value="256">UG (+256)</option>
                      <option value="44">GB (+44)</option>
                      <option value="380">UA (+380)</option>
                      <option value="971">AE (+971)</option>
                      <option value="598">UY (+598)</option>
                      <option value="1">EUA (+1)</option>
                      <option value="7">UZ (+7)</option>
                      <option value="678">VU (+678)</option>
                      <option value="379">VA (+379)</option>
                      <option value="58">VE (+58)</option>
                      <option value="84">VN (+84)</option>
                      <option value="84">VG (+1284)</option>
                      <option value="84">VI (+1340)</option>
                      <option value="681">WF (+681)</option>
                      <option value="969">YE (+969)</option>
                      <option value="967">YE (+967)</option>
                      <option value="260">ZM (+260)</option>
                      <option value="263">ZW (+263)</option>
                    </select>
                    <VectorsArrowSelect />
                </div>
                <ElementsFormInput
                    name="celular2"
                    v-model="login.phone"
                    type="tel"
                    required
                    phone
                />
              </div>
              <ElementsButton class="w-full" submit>Próximo</ElementsButton>
              <h6 class="nowrap text-center flex items-center gap-6 mt-8 mb-6">Ou</h6>
              <div class="flex gap-3">
                <ElementsButton small outline class="!py-4 !px-0 w-full flex items-center justify-center flex-1 gap-4">
                  <VectorsGoogleColored />
                  Google
                </ElementsButton>
                <ElementsButton small outline class="!py-4 !px-0 w-full flex items-center justify-center flex-1 gap-4">
                  <VectorsFacebookColored />
                  Facebook
                </ElementsButton>
              </div>
            </form>
          </aside>
          <img class="object-cover w-full hidden xl:block" src="/images/area-cliente/foto.jpg" alt="Foto">
        </article>

        <article class="box box--code w-full m-auto sm:p-10 bg-transparent sm:bg-white" v-if="validPhone && !validCode">
          <header>
            <h2 class="mb-4 sm:mb-6 uppercase">Informe o código</h2>
            <p class="max-w-xs w-full mb-8">Enviamos um código de confirmação para o seu WhatsApp.</p>
          </header>
          <form>
            <ElementsFormLabel class="mb-2.5" label="Digite o código" />
            <div class="flex items-end gap-2">
              <ElementsFormInput
                classes="text-center !text-2xl"
                name="digito1"
                big
                required
                mask="#"
              />
              <ElementsFormInput
                classes="text-center !text-2xl"
                name="digito2"
                big
                required
                mask="#"
              />
              <ElementsFormInput
                classes="text-center !text-2xl"
                name="digito3"
                big
                required
                mask="#"
              />
              <ElementsFormInput
                classes="text-center !text-2xl"
                name="digito4"
                big
                required
                mask="#"
              />
            </div>
          </form>
          <footer class="flex justify-between mt-8">
            <button class="underline" type="button">Não recebi o código</button>
            <button class="underline" @click="validPhone = false" type="button">Editar celular</button>
          </footer>
        </article>

        <article class="box box--form flex justify-between w-full m-auto bg-transparent sm:bg-white" v-if="validPhone && validCode">
          <aside class="sm:p-10 w-full">
            <header class="mb-11">
              <h2 class="uppercase">Quase lá</h2>
            </header>
            <form @submit.prevent="validPhone = true">
              <ElementsFormInput
                classes="mb-8"
                label="Seu celular"
                :valueInput="login.phone"
                type="tel"
                floating
                required
                disabled
              />
              <ElementsFormInput
                classes="mb-8"
                label="Seu nome"
                floating
                required
              />
              <ElementsFormInput
                classes="mb-8"
                label="E-mail"
                floating
                required
              />
              <ElementsFormInput
                label="CPF"
                floating
                required
              />
              <footer class="mt-8 w-full flex items-center justify-between">
                <small>Todos os campos são obrigatórios</small>
                <ElementsButton green submit>Confirmar</ElementsButton>
              </footer>
            </form>
          </aside>
          <img class="object-cover w-full hidden sm:block" src="/images/area-cliente/foto.jpg" alt="Foto">
        </article>
      </ElementsContainer>
    </div>
  </main>
</template>

<script setup lang="ts">
const validPhone = ref(false)
const validCode = ref(false)

const login = reactive({
  phone: ""
})

definePageMeta({
  layout: "simple"
})

useHead({
  title: `b.car | Entrar`,
  bodyAttrs: {
    class: "body"
  }
});
</script>

<style lang="scss" scoped>
.content {
  @media screen and (max-width: $mobile) {
    border-top: 4px solid $grey-1;
  }
}
.box {
  h2 {
    font-size: 24px;
    line-height: 32px;
    font-family: $gotham;
  }
  p {
    font-size: 16px;
    line-height: 24px;
  }
  .ddi {
    position: relative;
    background: $white;
    z-index: 5;
    margin: 0 -1px 0 0;
    select,
    option {
      padding: 0 28px 0 24px;
      font-weight: 400;
      font-size: 16px;
      height: 56px;
      border-top: 1px solid $grey-2;
      border-left: 1px solid $grey-2;
      border-bottom: 1px solid $grey-2;
      font: 500 16px/24px $inter;
      appearance: none;
    }
      svg {
        position: absolute;
        top: 50%;
        right: 16px;
        transform: translateY(-50%);
      }
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 1px;
        transform: translateY(-50%);
        width: 1px;
        background: $grey-2;
        height: 24px;
      }
  }
  h6 {
        color: $grey-5;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        &::before,
        &::after {
            content: "";
            width: 100%;
            height: 1px;
            background: $grey-2;
            display: block;
        }  
  }
  footer {
    small {
      font: 500 14px/20px $inter;
      max-width: 145px;
      width: 100%;
      color: $grey-4;
    }
  }
  &--form {
    max-width: 740px;
    img {
      max-width: 285px;
    }
  }
  &--code {
    max-width: 480px;
    fieldset {
      width: 72px;
    }
    button {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>

<style lang="scss">
.body {
  @media screen and (max-width: $mobile) {
    background: $white;
  }
}
</style>
