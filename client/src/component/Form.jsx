
const form = () => {
    return (
      <>
       <div class="container"></div>
        <form id="tneaForm"/>
             {/* <!-- Step 1: Personal Information --> */}
            <fieldset/>
                <legend>Step 1: Personal Information</legend>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required/>
                
                <label for="dob">Date of Birth (DD-MM-YYYY):</label>
                <input type="date" id="dob" name="dob" required/>

                <label for="parent">Name of the Parent/Guardian:</label>
                <input type="text" id="parent" name="parent" required/>
                
                <label for="gender">Gender:</label>
                <div>
                    <input type="radio" id="male" name="gender" value="male" required/>
                    <label for="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female" required/>
                    <label for="female">Female</label>
                    <input type="radio" id="other" name="gender" value="other" required/>
                    <label for="other">Other</label>
                </div>

                <label for="motherTongue">Mother Tongue:</label>
                <input type="text" id="motherTongue" name="motherTongue" required/>

                <label for="nationality">Nationality:</label>
                <input type="text" id="nationality" name="nationality" required/>

                <label for="communicationAddress">Communication Address:</label>
                <textarea id="communicationAddress" name="communicationAddress" required></textarea>

                <label for="permanentAddress">Permanent Address:</label>
                <textarea id="permanentAddress" name="permanentAddress" required></textarea>

                <label for="religion">Religion:</label>
                <input type="text" id="religion" name="religion" required/>

                <label for="community">Community:</label>
                <select id="community" name="community" required>
                    <option value="">Select</option>
                    <option value="OC">OC</option>
                    <option value="BC">BC</option>
                    <option value="OBC">OBC</option>
                    <option value="MBC">MBC</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                </select>

                <label for="state">State:</label>
                <select id="state" name="state" required>
                    <option value="">Select State</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Karnataka">Karnataka</option>
                </select>

                <label for="aadhar">Aadhar Number:</label>
                <input type="text" id="aadhar" name="aadhar" required/>

                <label for="district">District:</label>
                <input type="text" id="district" name="district" required/>

                <label for="taluk">Taluk:</label>
                <input type="text" id="taluk" name="taluk" required/>

                <label for="pincode">Address Pincode:</label>
                <input type="text" id="pincode" name="pincode" required/>
            
                <button type="button" class="btn btn-secondary prev">Previous</button>
                <button type="button" class="btn btn-primary next">Next</button>
                
            {/* <!-- Step 2: Special Reservation Information --> */}
            <fieldset>
                <legend>Step 2: Special Reservation Information</legend>
                <label for="category">Category:</label>

                <label for="subCategory">Sub-category (if applicable):</label>
                <input type="text" id="subCategory"/>
                
                <label for="disability">Disability:</label>
                <select id="disability" required>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>

                <label for="sportsQuota">Sports Quota:</label>
                <select id="sportsQuota" required>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>

                <label for="exServicemanQuota">Ex-serviceman Quota:</label>
                <select id="exServicemanQuota" required>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <button type="button" class="btn btn-secondary prev">Previous</button>
                <button type="button" class="btn btn-primary next">Next</button>
            </fieldset>
            {/* <!--Step 3: Scholarship Details Information --> */}
            <fieldset>
                <legend>Step 3: Scholarship Details Information</legend>
                <label for="scholarshipEligibility">Are you eligible for any scholarship?</label>
                <select id="scholarshipEligibility" required>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>

                <label for="scholarshipType">Type of scholarship (if applicable):</label>
                <input type="text" id="scholarshipType"/>
                
                <label for="scholarshipId">Scholarship ID (if applicable):</label>
                <input type="text" id="scholarshipId"/>
                <button type="button" class="btn btn-secondary prev">Previous</button>
                <button type="button" class="btn btn-primary next">Next</button>
            </fieldset>

            {/* Step 4: School of Study information --> */}
            <fieldset>
                <legend>Step 4: School of Study Information</legend>
                <label for="schoolName">Name of School:</label>
                <input type="text" id="schoolName" required/>
                
                <label for="schoolType">School Type:</label>
                <select id="schoolType" required>
                    <option value="Government">Government</option>
                    <option value="Private">Private</option>
                    <option value="Aided">Aided</option>
                </select>

                <label for="district">District:</label>
                <input type="text" id="district" required/>

                <label for="schoolCode">School Code:</label>
                <input type="text" id="schoolCode" required/>
                <button type="button" class="btn btn-secondary prev">Previous</button>
                <button type="button" class="btn btn-primary next">Next</button>
            </fieldset>

             {/* Step 5: Academic Information --> */}
            <fieldset>
                <legend>Step 5: Academic Information</legend>
                <label for="qualifyingExam">Qualifying Examination:</label>
                <input type="text" id="qualifyingExam" required/>

                <label for="board">Board:</label>
                <select id="board" required>
                    <option value="State">State</option>
                    <option value="CBSE">CBSE</option>
                    <option value="ICSE">ICSE</option>
                </select>

                <label for="marksObtained">Marks obtained:</label>
                <input type="number" id="marksObtained" required/>

                <label for="cutOffMarks">Cut-off marks:</label>
                <input type="number" id="cutOffMarks" required/>

                <label for="pcmMarks">Physics, Chemistry, Mathematics (PCM) marks:</label>
                <input type="number" id="pcmMarks" required/>
                <button type="button" class="btn btn-secondary prev">Previous</button>
                <button type="button" class="btn btn-primary next">Next</button>
            </fieldset>

             {/* Step 6: Upload Documents --> */}
            <fieldset>
                <legend>Step 6: Upload Documents</legend>
                    <label for="photo">Photograph:</label>
                    <input type="file" id="photo" name="photo" accept="image/*" required/>
        
                    <label for="signature">Signature:</label>
                    <input type="file" id="signature" name="signature" accept="image/*" required/>
                    <button type="button" class="btn btn-secondary prev">Previous</button>
                    <button type="button" class="btn btn-primary next">Next</button>
            </fieldset>

            {/* <!-- Step 7: Payment Details --> */}
            <fieldset>
                <legend>Step 7: Payment Details</legend>
                <label for="paymentMethod">Payment Method:</label>
                <select id="paymentMethod" required> 
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                </select>

                <label for="paymentStatus">Payment Status:</label>
                <select id="paymentStatus" required>
                    <option value="Paid">Paid</option>
                    <option value="Unpaid">Unpaid</option>
                </select>

                <label for="paymentReceipt">Payment Receipt Number (if paid):</label>
                <input type="text" id="paymentReceipt"/>
                <button type="button" class="btn btn-secondary prev">Previous</button>
                <button type="button" class="btn btn-primary next">Submit</button>
            </fieldset>

        <footer>
            <p>Important Documents Required:</p>
            <ul>
                <li>Original certificates for verification</li>
                <li>Photocopies of uploaded documents</li>
                <li>TNEA Application Form printout</li>
                <li>Payment receipt</li>
            </ul>
            <p>TNEA Helpline Number: 044-22351014/15</p>
            <p>TNEA Email ID: <a href="mailto:tnea@annauniv.edu">tnea@annauniv.edu</a></p>
        </footer>
       
        </>
  )
  
}

export default form 
 