import React, { Component } from 'react';

class CountrySelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: null
        }
    }

    render() {
        return (
            <select className="country-selector" onChange={
                (event) => {
                    this.props.incrementPage();
                    this.props.updateState({country: parseInt(event.target.value)});
                    this.props.updateState({'plan-type': 'individual'});
                }
            }>
                <option disabled="" value="">
                    Select country
                </option>
                <option value="1">Afghanistan</option>
                <option value="2">Albania</option>
                <option value="3">Algeria</option>
                <option value="4">American Samoa</option>
                <option value="5">Angola</option>
                <option value="6">Anguilla</option>
                <option value="7">Antartica</option>
                <option value="8">Antigua and Barbuda</option>
                <option value="9">Argentina</option>
                <option value="10">Armenia</option>
                <option value="11">Aruba</option>
                <option value="12">Ashmore and Cartier Island</option>
                <option value="13">Australia</option>
                <option value="14">Austria</option>
                <option value="15">Azerbaijan</option>
                <option value="16">Bahamas</option>
                <option value="17">Bahrain</option>
                <option value="18">Bangladesh</option>
                <option value="19">Barbados</option>
                <option value="20">Belarus</option>
                <option value="21">Belgium</option>
                <option value="22">Belize</option>
                <option value="23">Benin</option>
                <option value="24">Bermuda</option>
                <option value="25">Bhutan</option>
                <option value="26">Bolivia</option>
                <option value="27">Bosnia and Herzegovina</option>
                <option value="28">Botswana</option>
                <option value="29">Brazil</option>
                <option value="30">British Virgin Islands</option>
                <option value="31">Brunei</option>
                <option value="32">Bulgaria</option>
                <option value="33">Burkina Faso</option>
                <option value="34">Burma</option>
                <option value="35">Burundi</option>
                <option value="36">Cambodia</option>
                <option value="37">Cameroon</option>
                <option value="38">Canada</option>
                <option value="39">Cape Verde</option>
                <option value="40">Cayman Islands</option>
                <option value="41">Central African Republic</option>
                <option value="42">Chad</option>
                <option value="43">Chile</option>
                <option value="44">China</option>
                <option value="45">Christmas Island</option>
                <option value="46">Clipperton Island</option>
                <option value="47">Cocos (Keeling) Islands</option>
                <option value="48">Colombia</option>
                <option value="49">Comoros</option>
                <option value="50">Congo, Democratic Republic of the</option>
                <option value="51">Congo, Republic of the</option>
                <option value="52">Cook Islands</option>
                <option value="53">Costa Rica</option>
                <option value="54">Cote d'Ivoire</option>
                <option value="55">Croatia</option>
                <option value="56">Cuba</option>
                <option value="57">Cyprus</option>
                <option value="58">Czeck Republic</option>
                <option value="59">Denmark</option>
                <option value="60">Djibouti</option>
                <option value="61">Dominica</option>
                <option value="62">Dominican Republic</option>
                <option value="63">Ecuador</option>
                <option value="64">Egypt</option>
                <option value="65">El Salvador</option>
                <option value="66">Equatorial Guinea</option>
                <option value="67">Eritrea</option>
                <option value="68">Estonia</option>
                <option value="69">Ethiopia</option>
                <option value="70">Europa Island</option>
                <option value="71">Falkland Islands (Islas Malvinas)</option>
                <option value="72">Faroe Islands</option>
                <option value="73">Fiji</option>
                <option value="74">Finland</option>
                <option value="75">France</option>
                <option value="76">French Guiana</option>
                <option value="77">French Polynesia</option>
                <option value="78">French Southern and Antarctic Lands</option>
                <option value="79">Gabon</option>
                <option value="80">Gambiav, The</option>
                <option value="81">Gaza Strip</option>
                <option value="82">Georgia</option>
                <option value="83">Germany</option>
                <option value="84">Ghana</option>
                <option value="85">Gibraltar</option>
                <option value="86">Glorioso Islands</option>
                <option value="87">Greece</option>
                <option value="88">Greenland</option>
                <option value="89">Grenada</option>
                <option value="90">Guadeloupe</option>
                <option value="91">Guam</option>
                <option value="92">Guatemala</option>
                <option value="93">Guernsey</option>
                <option value="94">Guinea</option>
                <option value="95">Guinea-Bissau</option>
                <option value="96">Guyana</option>
                <option value="97">Haiti</option>
                <option value="98">Heard Island and McDonald Islands</option>
                <option value="99">Holy See (Vatican City)</option>
                <option value="100">Honduras</option>
                <option value="101">Hong Kong</option>
                <option value="102">Howland Island</option>
                <option value="103">Hungary</option>
                <option value="104">Iceland</option>
                <option value="105">India</option>
                <option value="106">Indonesia</option>
                <option value="107">Iran</option>
                <option value="108">Iraq</option>
                <option value="109">Ireland</option>
                <option value="110">Ireland, Northern</option>
                <option value="111">Israel</option>
                <option value="112">Italy</option>
                <option value="113">Jamaica</option>
                <option value="114">Jan Mayen</option>
                <option value="115">Japan</option>
                <option value="116">Jarvis Island</option>
                <option value="117">Jersey</option>
                <option value="118">Johnston Atoll</option>
                <option value="119">Jordan</option>
                <option value="120">Juan de Nova Island</option>
                <option value="121">Kazakhstan</option>
                <option value="122">Kenya</option>
                <option value="123">Kiribati</option>
                <option value="124">Korea, North</option>
                <option value="125">Korea, South</option>
                <option value="126">Kuwait</option>
                <option value="127">Kyrgyzstan</option>
                <option value="128">Laos</option>
                <option value="129">Latvia</option>
                <option value="130">Lebanon</option>
                <option value="131">Lesotho</option>
                <option value="132">Liberia</option>
                <option value="133">Libya</option>
                <option value="134">Liechtenstein</option>
                <option value="135">Lithuania</option>
                <option value="136">Luxembourg</option>
                <option value="137">Macau</option>
                <option value="138">
                    Macedonia, Former Yugoslav Republic of
                </option>
                <option value="139">Madagascar</option>
                <option value="140">Malawi</option>
                <option value="141">Malaysia</option>
                <option value="142">Maldives</option>
                <option value="143">Mali</option>
                <option value="144">Malta</option>
                <option value="145">Man, Isle of</option>
                <option value="146">Marshall Islands</option>
                <option value="147">Martinique</option>
                <option value="148">Mauritania</option>
                <option value="149">Mauritius</option>
                <option value="150">Mayotte</option>
                <option value="151">Mexico</option>
                <option value="152">Micronesia, Federated States of</option>
                <option value="153">Midway Islands</option>
                <option value="154">Moldova</option>
                <option value="155">Monaco</option>
                <option value="156">Mongolia</option>
                <option value="157">Montserrat</option>
                <option value="158">Morocco</option>
                <option value="159">Mozambique</option>
                <option value="160">Namibia</option>
                <option value="161">Nauru</option>
                <option value="162">Nepal</option>
                <option value="163">Netherlands</option>
                <option value="164">Netherlands Antilles</option>
                <option value="165">New Caledonia</option>
                <option value="166">New Zealand</option>
                <option value="167">Nicaragua</option>
                <option value="168">Niger</option>
                <option value="169">Nigeria</option>
                <option value="170">Niue</option>
                <option value="171">Norfolk Island</option>
                <option value="172">Northern Mariana Islands</option>
                <option value="173">Norway</option>
                <option value="174">Oman</option>
                <option value="175">Pakistan</option>
                <option value="176">Palau</option>
                <option value="177">Palestine</option>
                <option value="178">Panama</option>
                <option value="179">Papua New Guinea</option>
                <option value="180">Paraguay</option>
                <option value="181">Peru</option>
                <option value="182">Philippines</option>
                <option value="183">Pitcaim Islands</option>
                <option value="184">Poland</option>
                <option value="185">Portugal</option>
                <option value="186">Puerto Rico</option>
                <option value="187">Qatar</option>
                <option value="188">Reunion</option>
                <option value="189">Romainia</option>
                <option value="190">Russia</option>
                <option value="191">Rwanda</option>
                <option value="192">Saint Helena</option>
                <option value="193">Saint Kitts and Nevis</option>
                <option value="194">Saint Lucia</option>
                <option value="195">Saint Pierre and Miquelon</option>
                <option value="196">Saint Vincent and the Grenadines</option>
                <option value="197">Samoa</option>
                <option value="198">San Marino</option>
                <option value="199">Sao Tome and Principe</option>
                <option value="200">Saudi Arabia</option>
                <option value="201">Scotland</option>
                <option value="202">Senegal</option>
                <option value="203">Serbia</option>
                <option value="204">Seychelles</option>
                <option value="205">Sierra Leone</option>
                <option value="206">Singapore</option>
                <option value="207">Slovakia</option>
                <option value="208">Slovenia</option>
                <option value="209">Solomon Islands</option>
                <option value="210">Somalia</option>
                <option value="211">South Africa</option>
                <option value="212">
                    South Georgia and South Sandwich Islands
                </option>
                <option value="213">Spain</option>
                <option value="214">Spratly Islands</option>
                <option value="215">Sri Lanka</option>
                <option value="216">Sudan</option>
                <option value="217">Suriname</option>
                <option value="218">Svalbard</option>
                <option value="219">Swaziland</option>
                <option value="220">Sweden</option>
                <option value="221">Switzerland</option>
                <option value="222">Syria</option>
                <option value="223">Taiwan</option>
                <option value="224">Tajikistan</option>
                <option value="225">Tanzania</option>
                <option value="226">Thailand</option>
                <option value="227">Tobago</option>
                <option value="228">Toga</option>
                <option value="229">Tokelau</option>
                <option value="230">Tonga</option>
                <option value="231">Trinidad</option>
                <option value="232">Tunisia</option>
                <option value="233">Turkey</option>
                <option value="234">Turkmenistan</option>
                <option value="235">Tuvalu</option>
                <option value="236">Uganda</option>
                <option value="237">Ukraine</option>
                <option value="238">United Arab Emirates</option>
                <option value="239">United Kingdom</option>
                <option value="240">Uruguay</option>
                <option value="241">USA</option>
                <option value="242">Uzbekistan</option>
                <option value="243">Vanuatu</option>
                <option value="244">Venezuela</option>
                <option value="245">Vietnam</option>
                <option value="246">Virgin Islands</option>
                <option value="247">Wales</option>
                <option value="248">Wallis and Futuna</option>
                <option value="249">West Bank</option>
                <option value="250">Western Sahara</option>
                <option value="251">Yemen</option>
                <option value="252">Yugoslavia</option>
                <option value="253">Zambia</option>
                <option value="254">Zimbabwe</option>
            </select>
        )
    }
}

export default CountrySelect;