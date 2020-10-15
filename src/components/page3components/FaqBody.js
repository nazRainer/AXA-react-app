import React, {Component} from "react";
import FaqElements from "./FaqElements";

class FaqBody extends Component {
    render() {
        return (
            <div className="faq">
                <h1 className="faq-header">Frequently Asked Questions</h1>
                <div className="faq-elements">
                    {faqelementshtml.map((props) => 
                        <FaqElements h1={props.h1} htmlcontent={props.htmlcontent}/>
                    )}
                </div>
            </div>
        )
    }
}

const faqelementshtml = [
    {
        h1: "Am I eligible?",
        htmlcontent: `
        <p>
            Children - As young as 15 days old
            <br />
            <br />
            Adults - Up to age 49 years
            <br />
            <br />
            Expats - Expats, professionals, dependents and more
            <br />
            <br />
            Family - Group your family into a single package for
            easy management
        </p>
        `
    }, 

    {
        h1: 'What is eMedic?',
        htmlcontent: `
        <p>
            eMedic is a medical card (or medical insurance) that
            pays for your hospital bills. If you are admitted or
            warded at a hospital, eMedic will cover you.
        </p>
        `
    },

    {
        h1: 'What illnesses does eMedic cover?',
        htmlcontent: `
        <p>
            eMedic covers almost any illness, disease, medical
            condition or accident as long as it requires
            hospitalization (warded).
        </p>
        `
    },

    {
        h1: 'What hospitalization services are covered by eMedic?',
        htmlcontent: `
            eMedic covers the following hospitalization procedures:
            <br />
            <br />
            <ul>
                <li>
                    Pre- and post-hospitalization consultation,
                    diagnostics and physiotherapy
                </li>
                <li>Intensive Care Unit (ICU)</li>
                <li>X-ray and MRI scans</li>
                <li>Treatment and Surgery</li>
                <li>Prescription drugs(medicine)</li>
                <li>Ambulance</li>
                <li>Room & Board</li>
            </ul>
            <br />
            For the full coverage list, please refer to the eMedic fact
            sheet at
            <a href="http://bit.ly/emedic-factsheet"
                >http://bit.ly/emedic-factsheet</a
            >
        `
    },

    {
        h1: 'What is the Room & Board limit?',
        htmlcontent: `
        <p>
            eMedic provides coverage for hospital Room & Board of up
            to RM250 per day. If you choose a room higher than
            RM250, you just need to pay the difference.
            <br />
            There is no limit on the number of days for Room & Board
            accommodation, up to the Annual Limit of your chosen
            plan.
        </p>
        `
    },

    {
        h1: 'What is eMedic Family Plan?',
        htmlcontent: `
        <p>
            eMedic Family Plan lets you group your family members in
            a single medical insurance package. You no longer have
            to purchase separate plans for your loved ones.
        </p>
        `
    },

    {
        h1: 'What are the advantages of eMedic Family Plan?',
        htmlcontent: `
        <p>
            Instead of separate plans and payments for each family
            member, you now have just one family package and monthly
            payment. It’s easier to manage and even more affordable
            as eMedic Family Plan comes with a 5% discount on total
            monthly payment!
        </p>
        `
    },

    {
        h1: 'When can I use the eMedic card?',
        htmlcontent: `
        <p>
            You can use the eMedic medical card immediately for
            accidents. There is a 30-day waiting period for other
            illness and medical conditions. For serious medical
            conditions like cancer, high blood pressure or diabetes,
            there is a 120-day waiting period.
            <br />
            For more details, please refer to the eMedic fact sheet
            at
            <a href="http://bit.ly/emedic-factsheet"
                >http://bit.ly/emedic-factsheet</a
            >
        </p>
        `
    },

    {
        h1: 'Do I need to pay first if admitted to hospital?',
        htmlcontent: `
        <p>
            If you go to an AXA panel hospital, you won’t have to
            pay. Just present your eMedic Digital Medical Card and
            AXA will settle the bill directly with the hospital.
            <br />
            If you go to a non-panel hospital, you need to pay the
            bill first and then make a claim with AXA Affin Life
            Insurance Berhad to get reimbursement.
            <br />
            Note: Some hospitals may require a deposit that you will
            need to pay on your own first. The deposit is refundable
            by the hospital.
        </p>
        `
    },

    {
        h1: 'AXA panel hospital list',
        htmlcontent: `
        <p>
            For the list of our panel hospitals, go to
            <a href="https://www.axa.com.my/hospital-panel-life"
                >www.axa.com.my/hospital-panel-life</a
            >
        </p>
        `
    },
]

export default FaqBody;