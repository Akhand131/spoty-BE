const dotenv = require('dotenv');

dotenv.config();

const contractDataStored = [
  {
    "contractId": "A-45892",
    "contractTitle": "Mutual Non-Disclosure Agreement (NDA)",
    "contractType": "Non-Disclosure Agreement (NDA)",
    "jurisdiction": "Bengaluru, Karnataka, India",
    "governingLaw": "Arbitration and Conciliation Act, 1996",
    "termDuration": "3 years",
    "effectiveDate": "2024-01-15",
    "terminationClause": "Either party may terminate with 15 days written notice.",
    "disputeResolution": "Arbitration and Conciliation Act, 1996",
    "confidentialityPeriod": "Survives termination of agreement",
    "renewalClause": "Auto-renews annually unless terminated 30 days prior to renewal date.",
    "renewalDate": "2027-01-15",
    "contractValue": 1200000,
    "currency": "USD",
    "parties": [
      "Spotdraft Technologies Pvt. Ltd.",
      "Karan Malhotra"
    ],
    "assignedOwner": {
      "name": "Jane Doe",
      "email": "jane.doe@spotdraft.com",
      "department": "Legal",
      "team": "US Sales Team"
    },
    "clauses": {
      "nonCompete": true,
      "liabilityCap": "USD 500,000",
      "paymentTerms": "Net 30 Days",
      "dataProcessingAddendum": true,
      "governingLawClause": "Standard"
    },
    "specialTerms": [
      "The NDA is effective for a period of 3 years from the effective date.",
      "All proprietary information disclosed during discussions shall remain confidential.",
      "Confidential information includes but is not limited to product designs, source code, business plans, customer data, and pricing strategies.",
      "No party shall disclose the information to third parties without written consent.",
      "The obligation to maintain confidentiality survives the termination of this agreement.",
      "Either party may terminate this agreement with 15 days written notice.",
      "The recipient party must return or destroy all confidential materials upon termination.",
      "Any disputes shall be resolved under the Arbitration and Conciliation Act, 1996.",
      "Upon expiration of the initial term, this agreement shall automatically renew for successive one-year terms unless either party provides written notice of non-renewal at least 30 days prior to the end of the then-current term.",
      "All obligations under this agreement shall be binding upon the successors and permitted assigns of the parties."
    ],
    "counterpartyResponseTimes": [
      {
        "name": "Spotdraft Technologies Pvt. Ltd.",
        "respondedIn": "3 days",
        "firstResponseDate": "2024-01-18"
      },
      {
        "name": "Karan Malhotra",
        "respondedIn": "2 days",
        "firstResponseDate": "2024-01-17"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-01-15T00:00:00Z",
        "updatedBy": "Spotdraft Technologies Pvt. Ltd."
      },
      {
        "status": "legal review",
        "updatedAt": "2024-01-16T00:00:00Z",
        "updatedBy": "Jane Doe"
      },
      {
        "status": "redline",
        "updatedAt": "2024-01-18T00:00:00Z",
        "updatedBy": "Karan Malhotra"
      },
      {
        "status": "preview",
        "updatedAt": "2024-01-20T00:00:00Z",
        "updatedBy": "Spotdraft Technologies Pvt. Ltd."
      },
      {
        "status": "executed",
        "updatedAt": "2024-01-21T00:00:00Z",
        "updatedBy": "Karan Malhotra"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-01-15T00:00:00Z",
        "action": "created",
        "user": "legal@spotdraft.com",
        "comment": "Initial draft created."
      },
      {
        "timestamp": "2024-01-16T00:00:00Z",
        "action": "assigned",
        "user": "jane.doe@spotdraft.com",
        "comment": "Assigned to Jane Doe for legal review."
      },
      {
        "timestamp": "2024-01-17T00:00:00Z",
        "action": "viewed",
        "user": "karan.malhotra@example.com",
        "comment": "Viewed draft for the first time."
      },
      {
        "timestamp": "2024-01-18T00:00:00Z",
        "action": "redlined",
        "user": "karan.malhotra@example.com",
        "comment": "Added confidentiality clarification and modified termination clause."
      },
      {
        "timestamp": "2024-01-20T00:00:00Z",
        "action": "commented",
        "user": "legal@spotdraft.com",
        "comment": "Reviewed changes. No objections."
      },
      {
        "timestamp": "2024-01-21T00:00:00Z",
        "action": "signed",
        "user": "karan.malhotra@example.com",
        "comment": "Signed and finalized."
      }
    ],
    "currentStatus": "executed",
    "riskProfile": "Low",
    "customerCompany": "Wipro Ltd.",
    "predictedCloseDate": "2024-01-22"
  },
  {
    "contractType": "Non-Disclosure Agreement (NDA)",
    "jurisdiction": "Bengaluru, Karnataka, India",
    "termDuration": "3 years",
    "terminationClause": "Either party may terminate with 15 days written notice.",
    "disputeResolution": "Arbitration and Conciliation Act, 1996",
    "confidentialityPeriod": "Survives termination of agreement",
    "renewalClause": "This agreement shall automatically renew for additional one-year periods unless either party notifies the other in writing of its intent not to renew at least 30 days before the end of the current term.",
    "parties": [
      "Spotdraft Technologies Pvt. Ltd.",
      "Ravi Joshi"
    ],
    "effectiveDate": "2024-01-16",
    "specialTerms": [
      "The NDA is effective for a period of 3 years from the effective date.",
      "All proprietary information disclosed during discussions shall remain confidential.",
      "Confidential information includes but is not limited to product designs, source code, business plans, customer data, and pricing strategies.",
      "No party shall disclose the information to third parties without written consent.",
      "The obligation to maintain confidentiality survives the termination of this agreement.",
      "Either party may terminate this agreement with 15 days written notice.",
      "The recipient party must return or destroy all confidential materials upon termination.",
      "Any disputes shall be resolved under the Arbitration and Conciliation Act, 1996.",
      "Upon expiration of the initial term, this agreement shall automatically renew for successive one-year terms unless either party provides written notice of non-renewal at least 30 days prior to the end of the then-current term.",
      "All obligations under this agreement shall be binding upon the successors and permitted assigns of the parties."
    ],
    "counterpartyResponseTimes": [
      {
        "name": "Spotdraft Technologies Pvt. Ltd.",
        "respondedIn": "3 days",
        "firstResponseDate": "2024-01-19"
      },
      {
        "name": "Ravi Joshi",
        "respondedIn": "2 days",
        "firstResponseDate": "2024-01-18"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-01-16T00:00:00Z",
        "updatedBy": "Spotdraft Technologies Pvt. Ltd."
      },
      {
        "status": "redline",
        "updatedAt": "2024-01-19T00:00:00Z",
        "updatedBy": "Ravi Joshi"
      },
      {
        "status": "preview",
        "updatedAt": "2024-01-21T00:00:00Z",
        "updatedBy": "Spotdraft Technologies Pvt. Ltd."
      },
      {
        "status": "executed",
        "updatedAt": "2024-01-22T00:00:00Z",
        "updatedBy": "Ravi Joshi"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-01-16T00:00:00Z",
        "action": "created",
        "user": "legal@spotdraft.com",
        "comment": "Initial draft created."
      },
      {
        "timestamp": "2024-01-18T00:00:00Z",
        "action": "viewed",
        "user": "ravi.joshi@example.com",
        "comment": "Viewed draft for the first time."
      },
      {
        "timestamp": "2024-01-19T00:00:00Z",
        "action": "redlined",
        "user": "ravi.joshi@example.com",
        "comment": "Added confidentiality clarification and modified termination clause."
      },
      {
        "timestamp": "2024-01-21T00:00:00Z",
        "action": "commented",
        "user": "legal@spotdraft.com",
        "comment": "Reviewed changes. No objections."
      },
      {
        "timestamp": "2024-01-22T00:00:00Z",
        "action": "signed",
        "user": "ravi.joshi@example.com",
        "comment": "Signed and finalized."
      }
    ],
    "currentStatus": "executed",
    "customerCompany": "Swiggy Technologies"
  },
  {
    "contractType": "Sales Agreement",
    "parties": ["Flipkart Internet Pvt. Ltd.", "Rohit Sharma"],
    "jurisdiction": "Mumbai, Maharashtra, India",
    "effectiveDate": "2024-02-01",
    "termDuration": "2 years",
    "specialTerms": [
      "The buyer agrees to the minimum purchase obligation.",
      "All goods sold are subject to quality inspection upon delivery."
    ],
    "terminationClause": "Either party may terminate with 30 days written notice.",
    "disputeResolution": "Indian Contract Act, 1872",
    "confidentialityPeriod": "2 years post termination",
    "renewalClause": "Automatic renewal for 1 year unless notified in writing.",
    "counterpartyResponseTimes": [
      {
        "name": "Flipkart Internet Pvt. Ltd.",
        "respondedIn": "2 days",
        "firstResponseDate": "2024-02-03"
      },
      {
        "name": "Rohit Sharma",
        "respondedIn": "1 day",
        "firstResponseDate": "2024-02-02"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-02-01T09:00:00Z",
        "updatedBy": "Flipkart Internet Pvt. Ltd."
      },
      {
        "status": "redline",
        "updatedAt": "2024-02-03T14:00:00Z",
        "updatedBy": "Rohit Sharma"
      },
      {
        "status": "executed",
        "updatedAt": "2024-02-05T12:00:00Z",
        "updatedBy": "Rohit Sharma"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-02-01T09:00:00Z",
        "action": "created",
        "user": "legal@flipkart.com",
        "comment": "Initial Sales Agreement drafted."
      },
      {
        "timestamp": "2024-02-03T14:00:00Z",
        "action": "redlined",
        "user": "rohit.sharma@example.com",
        "comment": "Requested change in payment terms."
      },
      {
        "timestamp": "2024-02-05T12:00:00Z",
        "action": "signed",
        "user": "rohit.sharma@example.com",
        "comment": "Contract executed."
      }
    ],
    "currentStatus": "executed"
  },
  {
    "contractType": "Master Service Agreement",
    "parties": ["Zomato Ltd.", "Priya Nair"],
    "jurisdiction": "Delhi, India",
    "effectiveDate": "2024-03-10",
    "termDuration": "5 years",
    "specialTerms": [
      "Service levels defined in Annexure A must be maintained.",
      "Zomato reserves right to audit service compliance annually."
    ],
    "terminationClause": "Immediate termination in case of breach.",
    "disputeResolution": "Arbitration under ICA rules",
    "confidentialityPeriod": "5 years post agreement",
    "renewalClause": "Review and renew based on service performance.",
    "counterpartyResponseTimes": [
      {
        "name": "Zomato Ltd.",
        "respondedIn": "1 day",
        "firstResponseDate": "2024-03-11"
      },
      {
        "name": "Priya Nair",
        "respondedIn": "2 days",
        "firstResponseDate": "2024-03-12"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-03-10T10:00:00Z",
        "updatedBy": "Zomato Ltd."
      },
      {
        "status": "preview",
        "updatedAt": "2024-03-12T15:00:00Z",
        "updatedBy": "Priya Nair"
      },
      {
        "status": "executed",
        "updatedAt": "2024-03-14T09:30:00Z",
        "updatedBy": "Priya Nair"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-03-10T10:00:00Z",
        "action": "created",
        "user": "legal@zomato.com",
        "comment": "MSA draft uploaded."
      },
      {
        "timestamp": "2024-03-12T15:00:00Z",
        "action": "commented",
        "user": "priya.nair@example.com",
        "comment": "Reviewed, ready for signature."
      },
      {
        "timestamp": "2024-03-14T09:30:00Z",
        "action": "signed",
        "user": "priya.nair@example.com",
        "comment": "MSA executed."
      }
    ],
    "currentStatus": "executed"
  },
  {
    "contractType": "Employment Agreement",
    "parties": [
      "Zomato Ltd.",
      "Priya Nair"
    ],
    "jurisdiction": "Chennai, India",
    "effectiveDate": "2024-01-14",
    "termDuration": "1 years",
    "specialTerms": [
      "Subject to arbitration under ICA rules.",
      "Confidentiality to be maintained."
    ],
    "terminationClause": "Immediate termination in case of breach.",
    "disputeResolution": "Arbitration under ICA rules",
    "confidentialityPeriod": "3 years post agreement",
    "renewalClause": "Review and renew based on performance.",
    "counterpartyResponseTimes": [
      {
        "name": "Zomato Ltd.",
        "respondedIn": "1 day",
        "firstResponseDate": "2024-01-15"
      },
      {
        "name": "Priya Nair",
        "respondedIn": "2 days",
        "firstResponseDate": "2024-01-16"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-01-14T10:00:00Z",
        "updatedBy": "Zomato Ltd."
      },
      {
        "status": "preview",
        "updatedAt": "2024-01-16T15:00:00Z",
        "updatedBy": "Priya Nair"
      },
      {
        "status": "executed",
        "updatedAt": "2024-01-18T09:30:00Z",
        "updatedBy": "Priya Nair"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-01-14T10:00:00Z",
        "action": "created",
        "user": "legal@zomatoltd..com",
        "comment": "Agreement draft uploaded."
      },
      {
        "timestamp": "2024-01-16T15:00:00Z",
        "action": "commented",
        "user": "priya.nair@example.com",
        "comment": "Reviewed, ready for signature."
      },
      {
        "timestamp": "2024-01-18T09:30:00Z",
        "action": "signed",
        "user": "priya.nair@example.com",
        "comment": "Agreement executed."
      }
    ],
    "currentStatus": "executed"
  },
  {
    "contractType": "Master Service Agreement",
    "parties": [
      "Flipkart Pvt. Ltd.",
      "Ravi Sharma"
    ],
    "jurisdiction": "Chennai, India",
    "effectiveDate": "2024-02-22",
    "termDuration": "1 years",
    "specialTerms": [
      "Subject to arbitration under ICA rules.",
      "Maintain service levels as per annexure."
    ],
    "terminationClause": "Immediate termination in case of breach.",
    "disputeResolution": "Arbitration under ICA rules",
    "confidentialityPeriod": "5 years post agreement",
    "renewalClause": "Review and renew based on performance.",
    "counterpartyResponseTimes": [
      {
        "name": "Flipkart Pvt. Ltd.",
        "respondedIn": "1 day",
        "firstResponseDate": "2024-02-23"
      },
      {
        "name": "Ravi Sharma",
        "respondedIn": "2 days",
        "firstResponseDate": "2024-02-24"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-02-22T10:00:00Z",
        "updatedBy": "Flipkart Pvt. Ltd."
      },
      {
        "status": "preview",
        "updatedAt": "2024-02-24T15:00:00Z",
        "updatedBy": "Ravi Sharma"
      },
      {
        "status": "executed",
        "updatedAt": "2024-02-26T09:30:00Z",
        "updatedBy": "Ravi Sharma"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-02-22T10:00:00Z",
        "action": "created",
        "user": "legal@flipkartpvt.ltd..com",
        "comment": "Agreement draft uploaded."
      },
      {
        "timestamp": "2024-02-24T15:00:00Z",
        "action": "commented",
        "user": "ravi.sharma@example.com",
        "comment": "Reviewed, ready for signature."
      },
      {
        "timestamp": "2024-02-26T09:30:00Z",
        "action": "signed",
        "user": "ravi.sharma@example.com",
        "comment": "Agreement executed."
      }
    ],
    "currentStatus": "executed"
  },
  {
    "contractType": "Non-Disclosure Agreement",
    "parties": [
      "Infosys Ltd.",
      "Anjali Mehta"
    ],
    "jurisdiction": "Delhi, India",
    "effectiveDate": "2024-02-19",
    "termDuration": "3 years",
    "specialTerms": [
      "Subject to arbitration under ICA rules.",
      "Termination on breach of terms."
    ],
    "terminationClause": "Immediate termination in case of breach.",
    "disputeResolution": "Arbitration under ICA rules",
    "confidentialityPeriod": "2 years post agreement",
    "renewalClause": "Review and renew based on performance.",
    "counterpartyResponseTimes": [
      {
        "name": "Infosys Ltd.",
        "respondedIn": "1 day",
        "firstResponseDate": "2024-02-20"
      },
      {
        "name": "Anjali Mehta",
        "respondedIn": "2 days",
        "firstResponseDate": "2024-02-21"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-02-19T10:00:00Z",
        "updatedBy": "Infosys Ltd."
      },
      {
        "status": "preview",
        "updatedAt": "2024-02-21T15:00:00Z",
        "updatedBy": "Anjali Mehta"
      },
      {
        "status": "executed",
        "updatedAt": "2024-02-23T09:30:00Z",
        "updatedBy": "Anjali Mehta"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-02-19T10:00:00Z",
        "action": "created",
        "user": "legal@infosysltd..com",
        "comment": "Agreement draft uploaded."
      },
      {
        "timestamp": "2024-02-21T15:00:00Z",
        "action": "commented",
        "user": "anjali.mehta@example.com",
        "comment": "Reviewed, ready for signature."
      },
      {
        "timestamp": "2024-02-23T09:30:00Z",
        "action": "signed",
        "user": "anjali.mehta@example.com",
        "comment": "Agreement executed."
      }
    ],
    "currentStatus": "executed"
  },
  {
    "contractType": "Service Agreement",
    "parties": [
      "Amazon India",
      "Rohan Verma"
    ],
    "jurisdiction": "Chennai, India",
    "effectiveDate": "2024-04-26",
    "termDuration": "2 years",
    "specialTerms": [
      "Termination on breach of terms.",
      "Confidentiality to be maintained."
    ],
    "terminationClause": "Immediate termination in case of breach.",
    "disputeResolution": "Arbitration under ICA rules",
    "confidentialityPeriod": "2 years post agreement",
    "renewalClause": "Review and renew based on performance.",
    "counterpartyResponseTimes": [
      {
        "name": "Amazon India",
        "respondedIn": "1 day",
        "firstResponseDate": "2024-04-27"
      },
      {
        "name": "Rohan Verma",
        "respondedIn": "2 days",
        "firstResponseDate": "2024-04-28"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-04-26T10:00:00Z",
        "updatedBy": "Amazon India"
      },
      {
        "status": "preview",
        "updatedAt": "2024-04-28T15:00:00Z",
        "updatedBy": "Rohan Verma"
      },
      {
        "status": "executed",
        "updatedAt": "2024-04-30T09:30:00Z",
        "updatedBy": "Rohan Verma"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-04-26T10:00:00Z",
        "action": "created",
        "user": "legal@amazonindia.com",
        "comment": "Agreement draft uploaded."
      },
      {
        "timestamp": "2024-04-28T15:00:00Z",
        "action": "commented",
        "user": "rohan.verma@example.com",
        "comment": "Reviewed, ready for signature."
      },
      {
        "timestamp": "2024-04-30T09:30:00Z",
        "action": "signed",
        "user": "rohan.verma@example.com",
        "comment": "Agreement executed."
      }
    ],
    "currentStatus": "executed"
  },
  {
    "contractType": "Appointment Letter",
    "parties": [
      "TCS Ltd.",
      "Neha Singh"
    ],
    "jurisdiction": "Delhi, India",
    "effectiveDate": "2024-03-16",
    "termDuration": "3 years",
    "specialTerms": [
      "Right to audit annually.",
      "Confidentiality to be maintained."
    ],
    "terminationClause": "Immediate termination in case of breach.",
    "disputeResolution": "Arbitration under ICA rules",
    "confidentialityPeriod": "5 years post agreement",
    "renewalClause": "Review and renew based on performance.",
    "counterpartyResponseTimes": [
      {
        "name": "TCS Ltd.",
        "respondedIn": "1 day",
        "firstResponseDate": "2024-03-17"
      },
      {
        "name": "Neha Singh",
        "respondedIn": "2 days",
        "firstResponseDate": "2024-03-18"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-03-16T10:00:00Z",
        "updatedBy": "TCS Ltd."
      },
      {
        "status": "preview",
        "updatedAt": "2024-03-18T15:00:00Z",
        "updatedBy": "Neha Singh"
      },
      {
        "status": "executed",
        "updatedAt": "2024-03-20T09:30:00Z",
        "updatedBy": "Neha Singh"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-03-16T10:00:00Z",
        "action": "created",
        "user": "legal@tcsltd..com",
        "comment": "Agreement draft uploaded."
      },
      {
        "timestamp": "2024-03-18T15:00:00Z",
        "action": "commented",
        "user": "neha.singh@example.com",
        "comment": "Reviewed, ready for signature."
      },
      {
        "timestamp": "2024-03-20T09:30:00Z",
        "action": "signed",
        "user": "neha.singh@example.com",
        "comment": "Agreement executed."
      }
    ],
    "currentStatus": "executed"
  },
  {
    "contractType": "Customer Agreement",
    "parties": [
      "Reliance Retail",
      "Amitabh Desai"
    ],
    "jurisdiction": "Mumbai, India",
    "effectiveDate": "2024-04-06",
    "termDuration": "1 years",
    "specialTerms": [
      "Termination on breach of terms.",
      "Maintain service levels as per annexure."
    ],
    "terminationClause": "Immediate termination in case of breach.",
    "disputeResolution": "Arbitration under ICA rules",
    "confidentialityPeriod": "5 years post agreement",
    "renewalClause": "Review and renew based on performance.",
    "counterpartyResponseTimes": [
      {
        "name": "Reliance Retail",
        "respondedIn": "1 day",
        "firstResponseDate": "2024-04-07"
      },
      {
        "name": "Amitabh Desai",
        "respondedIn": "2 days",
        "firstResponseDate": "2024-04-08"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-04-06T10:00:00Z",
        "updatedBy": "Reliance Retail"
      },
      {
        "status": "preview",
        "updatedAt": "2024-04-08T15:00:00Z",
        "updatedBy": "Amitabh Desai"
      },
      {
        "status": "executed",
        "updatedAt": "2024-04-10T09:30:00Z",
        "updatedBy": "Amitabh Desai"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-04-06T10:00:00Z",
        "action": "created",
        "user": "legal@relianceretail.com",
        "comment": "Agreement draft uploaded."
      },
      {
        "timestamp": "2024-04-08T15:00:00Z",
        "action": "commented",
        "user": "amitabh.desai@example.com",
        "comment": "Reviewed, ready for signature."
      },
      {
        "timestamp": "2024-04-10T09:30:00Z",
        "action": "signed",
        "user": "amitabh.desai@example.com",
        "comment": "Agreement executed."
      }
    ],
    "currentStatus": "executed"
  },
  {
    "contractType": "Vendor Agreement",
    "parties": [
      "Swiggy",
      "Karan Patel"
    ],
    "jurisdiction": "Hyderabad, India",
    "effectiveDate": "2024-05-02",
    "termDuration": "2 years",
    "specialTerms": [
      "Right to audit annually.",
      "Termination on breach of terms."
    ],
    "terminationClause": "Immediate termination in case of breach.",
    "disputeResolution": "Arbitration under ICA rules",
    "confidentialityPeriod": "3 years post agreement",
    "renewalClause": "Review and renew based on performance.",
    "counterpartyResponseTimes": [
      {
        "name": "Swiggy",
        "respondedIn": "1 day",
        "firstResponseDate": "2024-05-03"
      },
      {
        "name": "Karan Patel",
        "respondedIn": "2 days",
        "firstResponseDate": "2024-05-04"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-05-02T10:00:00Z",
        "updatedBy": "Swiggy"
      },
      {
        "status": "preview",
        "updatedAt": "2024-05-04T15:00:00Z",
        "updatedBy": "Karan Patel"
      },
      {
        "status": "executed",
        "updatedAt": "2024-05-06T09:30:00Z",
        "updatedBy": "Karan Patel"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-05-02T10:00:00Z",
        "action": "created",
        "user": "legal@swiggy.com",
        "comment": "Agreement draft uploaded."
      },
      {
        "timestamp": "2024-05-04T15:00:00Z",
        "action": "commented",
        "user": "karan.patel@example.com",
        "comment": "Reviewed, ready for signature."
      },
      {
        "timestamp": "2024-05-06T09:30:00Z",
        "action": "signed",
        "user": "karan.patel@example.com",
        "comment": "Agreement executed."
      }
    ],
    "currentStatus": "executed"
  },
  {
    "contractType": "Joining Form",
    "parties": [
      "Microsoft India",
      "Divya Kapoor"
    ],
    "jurisdiction": "Mumbai, India",
    "effectiveDate": "2024-05-04",
    "termDuration": "1 years",
    "specialTerms": [
      "Termination on breach of terms.",
      "Maintain service levels as per annexure."
    ],
    "terminationClause": "Immediate termination in case of breach.",
    "disputeResolution": "Arbitration under ICA rules",
    "confidentialityPeriod": "5 years post agreement",
    "renewalClause": "Review and renew based on performance.",
    "counterpartyResponseTimes": [
      {
        "name": "Microsoft India",
        "respondedIn": "1 day",
        "firstResponseDate": "2024-05-05"
      },
      {
        "name": "Divya Kapoor",
        "respondedIn": "2 days",
        "firstResponseDate": "2024-05-06"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-05-04T10:00:00Z",
        "updatedBy": "Microsoft India"
      },
      {
        "status": "preview",
        "updatedAt": "2024-05-06T15:00:00Z",
        "updatedBy": "Divya Kapoor"
      },
      {
        "status": "executed",
        "updatedAt": "2024-05-08T09:30:00Z",
        "updatedBy": "Divya Kapoor"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-05-04T10:00:00Z",
        "action": "created",
        "user": "legal@microsoftindia.com",
        "comment": "Agreement draft uploaded."
      },
      {
        "timestamp": "2024-05-06T15:00:00Z",
        "action": "commented",
        "user": "divya.kapoor@example.com",
        "comment": "Reviewed, ready for signature."
      },
      {
        "timestamp": "2024-05-08T09:30:00Z",
        "action": "signed",
        "user": "divya.kapoor@example.com",
        "comment": "Agreement executed."
      }
    ],
    "currentStatus": "executed"
  },
  {
    "contractType": "Amendment Agreement",
    "parties": [
      "Google India",
      "Suresh Reddy"
    ],
    "jurisdiction": "Bengaluru, India",
    "effectiveDate": "2024-06-14",
    "termDuration": "5 years",
    "specialTerms": [
      "Termination on breach of terms.",
      "Confidentiality to be maintained."
    ],
    "terminationClause": "Immediate termination in case of breach.",
    "disputeResolution": "Arbitration under ICA rules",
    "confidentialityPeriod": "3 years post agreement",
    "renewalClause": "Review and renew based on performance.",
    "counterpartyResponseTimes": [
      {
        "name": "Google India",
        "respondedIn": "1 day",
        "firstResponseDate": "2024-06-15"
      },
      {
        "name": "Suresh Reddy",
        "respondedIn": "2 days",
        "firstResponseDate": "2024-06-16"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-06-14T10:00:00Z",
        "updatedBy": "Google India"
      },
      {
        "status": "preview",
        "updatedAt": "2024-06-16T15:00:00Z",
        "updatedBy": "Suresh Reddy"
      },
      {
        "status": "executed",
        "updatedAt": "2024-06-18T09:30:00Z",
        "updatedBy": "Suresh Reddy"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-06-14T10:00:00Z",
        "action": "created",
        "user": "legal@googleindia.com",
        "comment": "Agreement draft uploaded."
      },
      {
        "timestamp": "2024-06-16T15:00:00Z",
        "action": "commented",
        "user": "suresh.reddy@example.com",
        "comment": "Reviewed, ready for signature."
      },
      {
        "timestamp": "2024-06-18T09:30:00Z",
        "action": "signed",
        "user": "suresh.reddy@example.com",
        "comment": "Agreement executed."
      }
    ],
    "currentStatus": "executed"
  },
  {
    "contractType": "Lease Agreement",
    "parties": [
      "Paytm",
      "Tanvi Jain"
    ],
    "jurisdiction": "Hyderabad, India",
    "effectiveDate": "2024-01-26",
    "termDuration": "5 years",
    "specialTerms": [
      "Subject to arbitration under ICA rules.",
      "Confidentiality to be maintained."
    ],
    "terminationClause": "Immediate termination in case of breach.",
    "disputeResolution": "Arbitration under ICA rules",
    "confidentialityPeriod": "3 years post agreement",
    "renewalClause": "Review and renew based on performance.",
    "counterpartyResponseTimes": [
      {
        "name": "Paytm",
        "respondedIn": "1 day",
        "firstResponseDate": "2024-01-27"
      },
      {
        "name": "Tanvi Jain",
        "respondedIn": "2 days",
        "firstResponseDate": "2024-01-28"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-01-26T10:00:00Z",
        "updatedBy": "Paytm"
      },
      {
        "status": "preview",
        "updatedAt": "2024-01-28T15:00:00Z",
        "updatedBy": "Tanvi Jain"
      },
      {
        "status": "executed",
        "updatedAt": "2024-01-30T09:30:00Z",
        "updatedBy": "Tanvi Jain"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-01-26T10:00:00Z",
        "action": "created",
        "user": "legal@paytm.com",
        "comment": "Agreement draft uploaded."
      },
      {
        "timestamp": "2024-01-28T15:00:00Z",
        "action": "commented",
        "user": "tanvi.jain@example.com",
        "comment": "Reviewed, ready for signature."
      },
      {
        "timestamp": "2024-01-30T09:30:00Z",
        "action": "signed",
        "user": "tanvi.jain@example.com",
        "comment": "Agreement executed."
      }
    ],
    "currentStatus": "executed"
  },
  {
    "contractType": "Order Form",
    "parties": [
      "Zomato Ltd.",
      "Priya Nair"
    ],
    "jurisdiction": "Bengaluru, India",
    "effectiveDate": "2024-02-12",
    "termDuration": "3 years",
    "specialTerms": [
      "Confidentiality to be maintained.",
      "Subject to arbitration under ICA rules."
    ],
    "terminationClause": "Immediate termination in case of breach.",
    "disputeResolution": "Arbitration under ICA rules",
    "confidentialityPeriod": "2 years post agreement",
    "renewalClause": "Review and renew based on performance.",
    "counterpartyResponseTimes": [
      {
        "name": "Zomato Ltd.",
        "respondedIn": "1 day",
        "firstResponseDate": "2024-02-13"
      },
      {
        "name": "Priya Nair",
        "respondedIn": "2 days",
        "firstResponseDate": "2024-02-14"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-02-12T10:00:00Z",
        "updatedBy": "Zomato Ltd."
      },
      {
        "status": "preview",
        "updatedAt": "2024-02-14T15:00:00Z",
        "updatedBy": "Priya Nair"
      },
      {
        "status": "executed",
        "updatedAt": "2024-02-16T09:30:00Z",
        "updatedBy": "Priya Nair"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-02-12T10:00:00Z",
        "action": "created",
        "user": "legal@zomatoltd..com",
        "comment": "Agreement draft uploaded."
      },
      {
        "timestamp": "2024-02-14T15:00:00Z",
        "action": "commented",
        "user": "priya.nair@example.com",
        "comment": "Reviewed, ready for signature."
      },
      {
        "timestamp": "2024-02-16T09:30:00Z",
        "action": "signed",
        "user": "priya.nair@example.com",
        "comment": "Agreement executed."
      }
    ],
    "currentStatus": "executed"
  },
  {
    "contractType": "Addendum Agreement",
    "parties": [
      "Flipkart Pvt. Ltd.",
      "Ravi Sharma"
    ],
    "jurisdiction": "Hyderabad, India",
    "effectiveDate": "2024-06-11",
    "termDuration": "2 years",
    "specialTerms": [
      "Confidentiality to be maintained.",
      "Subject to arbitration under ICA rules."
    ],
    "terminationClause": "Immediate termination in case of breach.",
    "disputeResolution": "Arbitration under ICA rules",
    "confidentialityPeriod": "2 years post agreement",
    "renewalClause": "Review and renew based on performance.",
    "counterpartyResponseTimes": [
      {
        "name": "Flipkart Pvt. Ltd.",
        "respondedIn": "1 day",
        "firstResponseDate": "2024-06-12"
      },
      {
        "name": "Ravi Sharma",
        "respondedIn": "2 days",
        "firstResponseDate": "2024-06-13"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-06-11T10:00:00Z",
        "updatedBy": "Flipkart Pvt. Ltd."
      },
      {
        "status": "preview",
        "updatedAt": "2024-06-13T15:00:00Z",
        "updatedBy": "Ravi Sharma"
      },
      {
        "status": "executed",
        "updatedAt": "2024-06-15T09:30:00Z",
        "updatedBy": "Ravi Sharma"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-06-11T10:00:00Z",
        "action": "created",
        "user": "legal@flipkartpvt.ltd..com",
        "comment": "Agreement draft uploaded."
      },
      {
        "timestamp": "2024-06-13T15:00:00Z",
        "action": "commented",
        "user": "ravi.sharma@example.com",
        "comment": "Reviewed, ready for signature."
      },
      {
        "timestamp": "2024-06-15T09:30:00Z",
        "action": "signed",
        "user": "ravi.sharma@example.com",
        "comment": "Agreement executed."
      }
    ],
    "currentStatus": "executed"
  },
  {
    "contractType": "Consulting Agreement",
    "parties": [
      "Infosys Ltd.",
      "Anjali Mehta"
    ],
    "jurisdiction": "Hyderabad, India",
    "effectiveDate": "2024-01-01",
    "termDuration": "2 years",
    "specialTerms": [
      "Termination on breach of terms.",
      "Subject to arbitration under ICA rules."
    ],
    "terminationClause": "Immediate termination in case of breach.",
    "disputeResolution": "Arbitration under ICA rules",
    "confidentialityPeriod": "3 years post agreement",
    "renewalClause": "Review and renew based on performance.",
    "counterpartyResponseTimes": [
      {
        "name": "Infosys Ltd.",
        "respondedIn": "1 day",
        "firstResponseDate": "2024-01-02"
      },
      {
        "name": "Anjali Mehta",
        "respondedIn": "2 days",
        "firstResponseDate": "2024-01-03"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-01-01T10:00:00Z",
        "updatedBy": "Infosys Ltd."
      },
      {
        "status": "preview",
        "updatedAt": "2024-01-03T15:00:00Z",
        "updatedBy": "Anjali Mehta"
      },
      {
        "status": "executed",
        "updatedAt": "2024-01-05T09:30:00Z",
        "updatedBy": "Anjali Mehta"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-01-01T10:00:00Z",
        "action": "created",
        "user": "legal@infosysltd..com",
        "comment": "Agreement draft uploaded."
      },
      {
        "timestamp": "2024-01-03T15:00:00Z",
        "action": "commented",
        "user": "anjali.mehta@example.com",
        "comment": "Reviewed, ready for signature."
      },
      {
        "timestamp": "2024-01-05T09:30:00Z",
        "action": "signed",
        "user": "anjali.mehta@example.com",
        "comment": "Agreement executed."
      }
    ],
    "currentStatus": "executed"
  },
  {
    "contractType": "Marketplace Supply Agreement",
    "parties": [
      "Amazon India",
      "Rohan Verma"
    ],
    "jurisdiction": "Mumbai, India",
    "effectiveDate": "2024-02-04",
    "termDuration": "3 years",
    "specialTerms": [
      "Confidentiality to be maintained.",
      "Maintain service levels as per annexure."
    ],
    "terminationClause": "Immediate termination in case of breach.",
    "disputeResolution": "Arbitration under ICA rules",
    "confidentialityPeriod": "5 years post agreement",
    "renewalClause": "Review and renew based on performance.",
    "counterpartyResponseTimes": [
      {
        "name": "Amazon India",
        "respondedIn": "1 day",
        "firstResponseDate": "2024-02-05"
      },
      {
        "name": "Rohan Verma",
        "respondedIn": "2 days",
        "firstResponseDate": "2024-02-06"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-02-04T10:00:00Z",
        "updatedBy": "Amazon India"
      },
      {
        "status": "preview",
        "updatedAt": "2024-02-06T15:00:00Z",
        "updatedBy": "Rohan Verma"
      },
      {
        "status": "executed",
        "updatedAt": "2024-02-08T09:30:00Z",
        "updatedBy": "Rohan Verma"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-02-04T10:00:00Z",
        "action": "created",
        "user": "legal@amazonindia.com",
        "comment": "Agreement draft uploaded."
      },
      {
        "timestamp": "2024-02-06T15:00:00Z",
        "action": "commented",
        "user": "rohan.verma@example.com",
        "comment": "Reviewed, ready for signature."
      },
      {
        "timestamp": "2024-02-08T09:30:00Z",
        "action": "signed",
        "user": "rohan.verma@example.com",
        "comment": "Agreement executed."
      }
    ],
    "currentStatus": "executed"
  },
  {
    "contractType": "Pricing Agreement",
    "parties": [
      "TCS Ltd.",
      "Neha Singh"
    ],
    "jurisdiction": "Chennai, India",
    "effectiveDate": "2024-04-13",
    "termDuration": "5 years",
    "specialTerms": [
      "Right to audit annually.",
      "Maintain service levels as per annexure."
    ],
    "terminationClause": "Immediate termination in case of breach.",
    "disputeResolution": "Arbitration under ICA rules",
    "confidentialityPeriod": "2 years post agreement",
    "renewalClause": "Review and renew based on performance.",
    "counterpartyResponseTimes": [
      {
        "name": "TCS Ltd.",
        "respondedIn": "1 day",
        "firstResponseDate": "2024-04-14"
      },
      {
        "name": "Neha Singh",
        "respondedIn": "2 days",
        "firstResponseDate": "2024-04-15"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-04-13T10:00:00Z",
        "updatedBy": "TCS Ltd."
      },
      {
        "status": "preview",
        "updatedAt": "2024-04-15T15:00:00Z",
        "updatedBy": "Neha Singh"
      },
      {
        "status": "executed",
        "updatedAt": "2024-04-17T09:30:00Z",
        "updatedBy": "Neha Singh"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-04-13T10:00:00Z",
        "action": "created",
        "user": "legal@tcsltd..com",
        "comment": "Agreement draft uploaded."
      },
      {
        "timestamp": "2024-04-15T15:00:00Z",
        "action": "commented",
        "user": "neha.singh@example.com",
        "comment": "Reviewed, ready for signature."
      },
      {
        "timestamp": "2024-04-17T09:30:00Z",
        "action": "signed",
        "user": "neha.singh@example.com",
        "comment": "Agreement executed."
      }
    ],
    "currentStatus": "executed"
  },
  {
    "contractType": "Membership Agreement",
    "parties": [
      "Reliance Retail",
      "Amitabh Desai"
    ],
    "jurisdiction": "Delhi, India",
    "effectiveDate": "2024-01-02",
    "termDuration": "1 years",
    "specialTerms": [
      "Subject to arbitration under ICA rules.",
      "Confidentiality to be maintained."
    ],
    "terminationClause": "Immediate termination in case of breach.",
    "disputeResolution": "Arbitration under ICA rules",
    "confidentialityPeriod": "2 years post agreement",
    "renewalClause": "Review and renew based on performance.",
    "counterpartyResponseTimes": [
      {
        "name": "Reliance Retail",
        "respondedIn": "1 day",
        "firstResponseDate": "2024-01-03"
      },
      {
        "name": "Amitabh Desai",
        "respondedIn": "2 days",
        "firstResponseDate": "2024-01-04"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-01-02T10:00:00Z",
        "updatedBy": "Reliance Retail"
      },
      {
        "status": "preview",
        "updatedAt": "2024-01-04T15:00:00Z",
        "updatedBy": "Amitabh Desai"
      },
      {
        "status": "executed",
        "updatedAt": "2024-01-06T09:30:00Z",
        "updatedBy": "Amitabh Desai"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-01-02T10:00:00Z",
        "action": "created",
        "user": "legal@relianceretail.com",
        "comment": "Agreement draft uploaded."
      },
      {
        "timestamp": "2024-01-04T15:00:00Z",
        "action": "commented",
        "user": "amitabh.desai@example.com",
        "comment": "Reviewed, ready for signature."
      },
      {
        "timestamp": "2024-01-06T09:30:00Z",
        "action": "signed",
        "user": "amitabh.desai@example.com",
        "comment": "Agreement executed."
      }
    ],
    "currentStatus": "executed"
  },
  {
    "contractType": "Independent Contractor Agreement",
    "parties": [
      "Swiggy",
      "Karan Patel"
    ],
    "jurisdiction": "Hyderabad, India",
    "effectiveDate": "2024-03-01",
    "termDuration": "5 years",
    "specialTerms": [
      "Right to audit annually.",
      "Termination on breach of terms."
    ],
    "terminationClause": "Immediate termination in case of breach.",
    "disputeResolution": "Arbitration under ICA rules",
    "confidentialityPeriod": "3 years post agreement",
    "renewalClause": "Review and renew based on performance.",
    "counterpartyResponseTimes": [
      {
        "name": "Swiggy",
        "respondedIn": "1 day",
        "firstResponseDate": "2024-03-02"
      },
      {
        "name": "Karan Patel",
        "respondedIn": "2 days",
        "firstResponseDate": "2024-03-03"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-03-01T10:00:00Z",
        "updatedBy": "Swiggy"
      },
      {
        "status": "preview",
        "updatedAt": "2024-03-03T15:00:00Z",
        "updatedBy": "Karan Patel"
      },
      {
        "status": "executed",
        "updatedAt": "2024-03-05T09:30:00Z",
        "updatedBy": "Karan Patel"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-03-01T10:00:00Z",
        "action": "created",
        "user": "legal@swiggy.com",
        "comment": "Agreement draft uploaded."
      },
      {
        "timestamp": "2024-03-03T15:00:00Z",
        "action": "commented",
        "user": "karan.patel@example.com",
        "comment": "Reviewed, ready for signature."
      },
      {
        "timestamp": "2024-03-05T09:30:00Z",
        "action": "signed",
        "user": "karan.patel@example.com",
        "comment": "Agreement executed."
      }
    ],
    "currentStatus": "executed"
  },
  {
    "contractType": "Procurement Agreement",
    "parties": [
      "Microsoft India",
      "Divya Kapoor"
    ],
    "jurisdiction": "Bengaluru, India",
    "effectiveDate": "2024-05-26",
    "termDuration": "5 years",
    "specialTerms": [
      "Right to audit annually.",
      "Subject to arbitration under ICA rules."
    ],
    "terminationClause": "Immediate termination in case of breach.",
    "disputeResolution": "Arbitration under ICA rules",
    "confidentialityPeriod": "2 years post agreement",
    "renewalClause": "Review and renew based on performance.",
    "counterpartyResponseTimes": [
      {
        "name": "Microsoft India",
        "respondedIn": "1 day",
        "firstResponseDate": "2024-05-27"
      },
      {
        "name": "Divya Kapoor",
        "respondedIn": "2 days",
        "firstResponseDate": "2024-05-28"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-05-26T10:00:00Z",
        "updatedBy": "Microsoft India"
      },
      {
        "status": "preview",
        "updatedAt": "2024-05-28T15:00:00Z",
        "updatedBy": "Divya Kapoor"
      },
      {
        "status": "executed",
        "updatedAt": "2024-05-30T09:30:00Z",
        "updatedBy": "Divya Kapoor"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-05-26T10:00:00Z",
        "action": "created",
        "user": "legal@microsoftindia.com",
        "comment": "Agreement draft uploaded."
      },
      {
        "timestamp": "2024-05-28T15:00:00Z",
        "action": "commented",
        "user": "divya.kapoor@example.com",
        "comment": "Reviewed, ready for signature."
      },
      {
        "timestamp": "2024-05-30T09:30:00Z",
        "action": "signed",
        "user": "divya.kapoor@example.com",
        "comment": "Agreement executed."
      }
    ],
    "currentStatus": "executed"
  },
  {
    "contractId": "A-45892",
    "contractTitle": "Project Titan MSA with Acme Corp",
    "contractType": "Master Services Agreement (MSA)",
    "jurisdiction": "California, USA",
    "governingLaw": "California Civil Code",
    "termDuration": "3 years",
    "effectiveDate": "2024-09-15",
    "createdDate": "2024-09-01T00:00:00Z",
    "terminationClause": "Either party may terminate with 15 days written notice.",
    "disputeResolution": "Binding arbitration in California",
    "confidentialityPeriod": "Survives termination of agreement",
    "renewalClause": "Auto-renews annually unless terminated 30 days prior to renewal date.",
    "renewalDate": "2027-09-15",
    "contractValue": 1200000,
    "currency": "USD",
    "priority": "High",
    "urgency": "Critical",
    "parties": [
      "Spotdraft Technologies Pvt. Ltd.",
      "Acme Corp"
    ],
    "assignedOwner": {
      "name": "Jane Doe",
      "email": "jane.doe@spotdraft.com",
      "department": "Legal",
      "team": "US Sales Team"
    },
    "clauses": {
      "nonCompete": true,
      "liabilityCap": "USD 500,000",
      "paymentTerms": "Net 30 Days",
      "dataProcessingAddendum": true,
      "governingLawClause": "Standard"
    },
    "specialTerms": [
      "The MSA includes enterprise support with 24/7 availability",
      "Custom integration services included",
      "Quarterly business reviews mandatory"
    ],
    "counterpartyResponseTimes": [
      {
        "name": "Spotdraft Technologies Pvt. Ltd.",
        "respondedIn": "1 day",
        "firstResponseDate": "2024-09-02"
      },
      {
        "name": "Acme Corp",
        "respondedIn": "2 days",
        "firstResponseDate": "2024-09-03"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-09-01T00:00:00Z",
        "updatedBy": "US Sales Team",
        "timeInStage": "2 days"
      },
      {
        "status": "legal review",
        "updatedAt": "2024-09-03T00:00:00Z",
        "updatedBy": "Jane Doe",
        "timeInStage": "4 days"
      },
      {
        "status": "redline",
        "updatedAt": "2024-09-07T00:00:00Z",
        "updatedBy": "Acme Corp",
        "timeInStage": "3 days"
      },
      {
        "status": "preview",
        "updatedAt": "2024-09-10T00:00:00Z",
        "updatedBy": "Spotdraft Technologies Pvt. Ltd.",
        "timeInStage": "2 days"
      },
      {
        "status": "executed",
        "updatedAt": "2024-09-12T00:00:00Z",
        "updatedBy": "Acme Corp",
        "timeInStage": "0 days"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-09-01T00:00:00Z",
        "action": "created",
        "user": "sales@spotdraft.com",
        "comment": "High-value enterprise deal initiated."
      },
      {
        "timestamp": "2024-09-03T00:00:00Z",
        "action": "assigned",
        "user": "jane.doe@spotdraft.com",
        "comment": "Assigned to Jane Doe for legal review."
      },
      {
        "timestamp": "2024-09-12T00:00:00Z",
        "action": "signed",
        "user": "legal@acmecorp.com",
        "comment": "Executed successfully."
      }
    ],
    "currentStatus": "executed",
    "riskProfile": "High",
    "customerCompany": "Acme Corp",
    "predictedCloseDate": "2024-09-10",
    "actualCloseDate": "2024-09-12",
    "cycleTime": "11 days",
    "quarter": "Q3 2024",
    "region": "North America",
    "businessUnit": "Enterprise Sales",
    "isStalled": false
  },

  {
    "contractId": "B-12345",
    "contractTitle": "Enterprise License Agreement with Innovate Inc",
    "contractType": "Software License Agreement",
    "jurisdiction": "New York, USA",
    "governingLaw": "New York Commercial Law",
    "termDuration": "2 years",
    "effectiveDate": "2025-01-01",
    "createdDate": "2024-11-01T00:00:00Z",
    "terminationClause": "Either party may terminate with 30 days written notice.",
    "disputeResolution": "New York State Courts",
    "confidentialityPeriod": "Indefinite",
    "renewalClause": "Auto-renews for additional 1-year terms unless terminated.",
    "renewalDate": "2027-01-01",
    "contractValue": 750000,
    "currency": "USD",
    "priority": "High",
    "urgency": "Medium",
    "parties": [
      "Spotdraft Technologies Pvt. Ltd.",
      "Innovate Inc"
    ],
    "assignedOwner": {
      "name": "Jane Doe",
      "email": "jane.doe@spotdraft.com",
      "department": "Legal",
      "team": "US Sales Team"
    },
    "clauses": {
      "nonCompete": false,
      "liabilityCap": "USD 1,000,000",
      "paymentTerms": "Net 45 Days",
      "dataProcessingAddendum": false,
      "governingLawClause": "Standard"
    },
    "specialTerms": [
      "Source code escrow required",
      "Custom API development included",
      "Priority support tier"
    ],
    "counterpartyResponseTimes": [
      {
        "name": "Spotdraft Technologies Pvt. Ltd.",
        "respondedIn": "1 day",
        "firstResponseDate": "2024-11-02"
      },
      {
        "name": "Innovate Inc",
        "respondedIn": "5 days",
        "firstResponseDate": "2024-11-06"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-11-01T00:00:00Z",
        "updatedBy": "US Sales Team",
        "timeInStage": "5 days"
      },
      {
        "status": "legal review",
        "updatedAt": "2024-11-06T00:00:00Z",
        "updatedBy": "Jane Doe",
        "timeInStage": "18 days"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-11-01T00:00:00Z",
        "action": "created",
        "user": "sales@spotdraft.com",
        "comment": "Enterprise license agreement initiated."
      },
      {
        "timestamp": "2024-11-06T00:00:00Z",
        "action": "assigned",
        "user": "jane.doe@spotdraft.com",
        "comment": "Complex IP clauses need detailed review."
      },
      {
        "timestamp": "2024-11-20T00:00:00Z",
        "action": "commented",
        "user": "jane.doe@spotdraft.com",
        "comment": "Waiting for IP team input on escrow terms."
      }
    ],
    "currentStatus": "legal review",
    "riskProfile": "Medium",
    "customerCompany": "Innovate Inc",
    "predictedCloseDate": "2024-12-15",
    "cycleTime": "23 days",
    "quarter": "Q4 2024",
    "region": "North America",
    "businessUnit": "Enterprise Sales",
    "daysInCurrentStage": 18,
    "isStalled": true,
    "stalledReason": "Waiting for IP team review on source code escrow clauses"
  },
  {
    "contractId": "D-78901",
    "contractTitle": "Partnership Agreement with GlobalTech Solutions",
    "contractType": "Partnership Agreement",
    "jurisdiction": "Delaware, USA",
    "governingLaw": "Delaware General Corporation Law",
    "termDuration": "5 years",
    "effectiveDate": "2025-01-01",
    "createdDate": "2024-10-15T00:00:00Z",
    "terminationClause": "Either party may terminate with 90 days written notice.",
    "disputeResolution": "Delaware Court of Chancery",
    "confidentialityPeriod": "5 years post-termination",
    "renewalClause": "Requires mutual written agreement for renewal.",
    "renewalDate": "2030-01-01",
    "contractValue": 2500000,
    "currency": "USD",
    "priority": "Critical",
    "urgency": "High",
    "parties": [
      "Spotdraft Technologies Pvt. Ltd.",
      "GlobalTech Solutions"
    ],
    "assignedOwner": {
      "name": "Jane Doe",
      "email": "jane.doe@spotdraft.com",
      "department": "Legal",
      "team": "US Sales Team"
    },
    "clauses": {
      "nonCompete": true,
      "liabilityCap": "USD 5,000,000",
      "paymentTerms": "Net 30 Days",
      "dataProcessingAddendum": true,
      "governingLawClause": "Non-standard"
    },
    "specialTerms": [
      "Joint venture revenue sharing agreement",
      "Exclusive technology licensing terms",
      "Co-marketing obligations"
    ],
    "counterpartyResponseTimes": [
      {
        "name": "Spotdraft Technologies Pvt. Ltd.",
        "respondedIn": "2 days",
        "firstResponseDate": "2024-10-17"
      },
      {
        "name": "GlobalTech Solutions",
        "respondedIn": "7 days",
        "firstResponseDate": "2024-10-22"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-10-15T00:00:00Z",
        "updatedBy": "US Sales Team",
        "timeInStage": "7 days"
      },
      {
        "status": "legal review",
        "updatedAt": "2024-10-22T00:00:00Z",
        "updatedBy": "Jane Doe",
        "timeInStage": "33 days"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-10-15T00:00:00Z",
        "action": "created",
        "user": "partnerships@spotdraft.com",
        "comment": "Strategic partnership agreement initiated."
      },
      {
        "timestamp": "2024-10-22T00:00:00Z",
        "action": "assigned",
        "user": "jane.doe@spotdraft.com",
        "comment": "Complex partnership terms require extensive legal review."
      },
      {
        "timestamp": "2024-11-15T00:00:00Z",
        "action": "commented",
        "user": "jane.doe@spotdraft.com",
        "comment": "Revenue sharing terms need C-suite approval before proceeding."
      }
    ],
    "currentStatus": "legal review",
    "riskProfile": "Critical",
    "customerCompany": "GlobalTech Solutions",
    "predictedCloseDate": "2025-01-15",
    "cycleTime": "40 days",
    "quarter": "Q4 2024",
    "region": "North America",
    "businessUnit": "Strategic Partnerships",
    "daysInCurrentStage": 33,
    "isStalled": true,
    "stalledReason": "Complex revenue sharing terms require C-suite review and approval"
  },

  {
    "contractId": "C-67890",
    "contractTitle": "Cloud Services Agreement with TechVendor LLC",
    "contractType": "Vendor Agreement",
    "jurisdiction": "Texas, USA",
    "governingLaw": "Texas Business and Commerce Code",
    "termDuration": "3 years",
    "effectiveDate": "2025-01-01",
    "createdDate": "2024-11-10T00:00:00Z",
    "terminationClause": "Either party may terminate with 60 days written notice.",
    "disputeResolution": "Texas State Courts",
    "confidentialityPeriod": "2 years post-termination",
    "renewalClause": "Manual renewal required",
    "renewalDate": "2028-01-01",
    "contractValue": 450000,
    "currency": "USD",
    "priority": "Medium",
    "urgency": "Low",
    "parties": [
      "Spotdraft Technologies Pvt. Ltd.",
      "TechVendor LLC"
    ],
    "assignedOwner": {
      "name": "Mike Johnson",
      "email": "mike.johnson@spotdraft.com",
      "department": "Procurement",
      "team": "EU Operations Team"
    },
    "clauses": {
      "nonCompete": false,
      "liabilityCap": "USD 200,000",
      "paymentTerms": "Net 60 Days",
      "dataProcessingAddendum": true,
      "governingLawClause": "Non-standard"
    },
    "specialTerms": [
      "99.9% SLA with penalty clauses",
      "24/7 monitoring and support",
      "Quarterly capacity reviews"
    ],
    "counterpartyResponseTimes": [
      {
        "name": "Spotdraft Technologies Pvt. Ltd.",
        "respondedIn": "2 days",
        "firstResponseDate": "2024-11-12"
      },
      {
        "name": "TechVendor LLC",
        "respondedIn": "3 days",
        "firstResponseDate": "2024-11-15"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-11-10T00:00:00Z",
        "updatedBy": "EU Operations Team",
        "timeInStage": "3 days"
      },
      {
        "status": "legal review",
        "updatedAt": "2024-11-13T00:00:00Z",
        "updatedBy": "Sarah Chen",
        "timeInStage": "5 days"
      },
      {
        "status": "redline",
        "updatedAt": "2024-11-18T00:00:00Z",
        "updatedBy": "TechVendor LLC",
        "timeInStage": "4 days"
      },
      {
        "status": "pending approval",
        "updatedAt": "2024-11-22T00:00:00Z",
        "updatedBy": "Mike Johnson",
        "timeInStage": "2 days"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-11-10T00:00:00Z",
        "action": "created",
        "user": "procurement@spotdraft.com",
        "comment": "Cloud infrastructure agreement initiated."
      },
      {
        "timestamp": "2024-11-22T00:00:00Z",
        "action": "submitted_for_approval",
        "user": "mike.johnson@spotdraft.com",
        "comment": "Non-standard terms require CFO approval."
      }
    ],
    "currentStatus": "pending approval",
    "riskProfile": "Medium",
    "customerCompany": "TechVendor LLC",
    "predictedCloseDate": "2024-11-30",
    "cycleTime": "14 days",
    "quarter": "Q4 2024",
    "region": "North America",
    "businessUnit": "Operations",
    "daysInCurrentStage": 2,
    "pendingApprovalWith": "CFO",
    "approvalReason": "Non-standard governing law clause requires executive approval",
    "isStalled": false
  },

  {
    "contractId": "E-11111",
    "contractTitle": "SaaS Subscription Agreement with EuroTech GmbH",
    "contractType": "SaaS Agreement",
    "jurisdiction": "Berlin, Germany",
    "governingLaw": "German Civil Code (BGB)",
    "termDuration": "2 years",
    "effectiveDate": "2024-10-01",
    "createdDate": "2024-09-15T00:00:00Z",
    "terminationClause": "Either party may terminate with 30 days written notice.",
    "disputeResolution": "German Commercial Courts",
    "confidentialityPeriod": "3 years post-termination",
    "renewalClause": "Auto-renews annually unless terminated 30 days prior.",
    "renewalDate": "2026-10-01",
    "contractValue": 320000,
    "currency": "EUR",
    "priority": "Medium",
    "urgency": "Medium",
    "parties": [
      "Spotdraft Technologies Pvt. Ltd.",
      "EuroTech GmbH"
    ],
    "assignedOwner": {
      "name": "Hans Mueller",
      "email": "hans.mueller@spotdraft.com",
      "department": "Sales",
      "team": "EU Sales Team"
    },
    "clauses": {
      "nonCompete": false,
      "liabilityCap": "EUR 100,000",
      "paymentTerms": "Net 30 Days",
      "dataProcessingAddendum": true,
      "governingLawClause": "Standard"
    },
    "specialTerms": [
      "GDPR compliance requirements",
      "EU data residency mandatory",
      "German language support included"
    ],
    "counterpartyResponseTimes": [
      {
        "name": "Spotdraft Technologies Pvt. Ltd.",
        "respondedIn": "1 day",
        "firstResponseDate": "2024-09-16"
      },
      {
        "name": "EuroTech GmbH",
        "respondedIn": "2 days",
        "firstResponseDate": "2024-09-17"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-09-15T00:00:00Z",
        "updatedBy": "EU Sales Team",
        "timeInStage": "2 days"
      },
      {
        "status": "legal review",
        "updatedAt": "2024-09-17T00:00:00Z",
        "updatedBy": "Anna Schmidt",
        "timeInStage": "3 days"
      },
      {
        "status": "redline",
        "updatedAt": "2024-09-20T00:00:00Z",
        "updatedBy": "EuroTech GmbH",
        "timeInStage": "5 days"
      },
      {
        "status": "preview",
        "updatedAt": "2024-09-25T00:00:00Z",
        "updatedBy": "Spotdraft Technologies Pvt. Ltd.",
        "timeInStage": "3 days"
      },
      {
        "status": "executed",
        "updatedAt": "2024-09-28T00:00:00Z",
        "updatedBy": "EuroTech GmbH",
        "timeInStage": "0 days"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-09-15T00:00:00Z",
        "action": "created",
        "user": "hans.mueller@spotdraft.com",
        "comment": "EU SaaS agreement initiated."
      },
      {
        "timestamp": "2024-09-28T00:00:00Z",
        "action": "signed",
        "user": "legal@eurotech.de",
        "comment": "Successfully executed."
      }
    ],
    "currentStatus": "executed",
    "riskProfile": "Low",
    "customerCompany": "EuroTech GmbH",
    "predictedCloseDate": "2024-09-30",
    "actualCloseDate": "2024-09-28",
    "cycleTime": "13 days",
    "quarter": "Q3 2024",
    "region": "Europe",
    "businessUnit": "EU Sales",
    "isStalled": false
  },

  {
    "contractId": "F-22222",
    "contractTitle": "Data Processing Agreement - Missing DPA",
    "contractType": "Service Agreement",
    "jurisdiction": "London, UK",
    "governingLaw": "English Law",
    "termDuration": "1 year",
    "effectiveDate": "2024-11-01",
    "createdDate": "2024-10-20T00:00:00Z",
    "terminationClause": "Either party may terminate with 15 days written notice.",
    "disputeResolution": "English Courts",
    "confidentialityPeriod": "2 years post-termination",
    "renewalClause": "Manual renewal required",
    "renewalDate": "2025-11-01",
    "contractValue": 180000,
    "currency": "GBP",
    "priority": "High",
    "urgency": "Critical",
    "parties": [
      "Spotdraft Technologies Pvt. Ltd.",
      "DataCorp UK Ltd"
    ],
    "assignedOwner": {
      "name": "Emma Wilson",
      "email": "emma.wilson@spotdraft.com",
      "department": "Legal",
      "team": "EU Operations Team"
    },
    "clauses": {
      "nonCompete": false,
      "liabilityCap": "GBP 50,000",
      "paymentTerms": "Net 15 Days",
      "dataProcessingAddendum": false,  // MISSING DPA - COMPLIANCE RISK
      "governingLawClause": "Standard"
    },
    "specialTerms": [
      "Personal data processing involved",
      "GDPR compliance required",
      "UK GDPR application"
    ],
    "counterpartyResponseTimes": [
      {
        "name": "Spotdraft Technologies Pvt. Ltd.",
        "respondedIn": "1 day",
        "firstResponseDate": "2024-10-21"
      },
      {
        "name": "DataCorp UK Ltd",
        "respondedIn": "4 days",
        "firstResponseDate": "2024-10-24"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-10-20T00:00:00Z",
        "updatedBy": "EU Operations Team",
        "timeInStage": "4 days"
      },
      {
        "status": "legal review",
        "updatedAt": "2024-10-24T00:00:00Z",
        "updatedBy": "Emma Wilson",
        "timeInStage": "8 days"
      },
      {
        "status": "executed",
        "updatedAt": "2024-11-01T00:00:00Z",
        "updatedBy": "DataCorp UK Ltd",
        "timeInStage": "0 days"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-10-20T00:00:00Z",
        "action": "created",
        "user": "operations@spotdraft.com",
        "comment": "Service agreement for data processing services."
      },
      {
        "timestamp": "2024-11-01T00:00:00Z",
        "action": "signed",
        "user": "legal@datacorp.uk",
        "comment": "Executed without DPA - COMPLIANCE ISSUE IDENTIFIED."
      }
    ],
    "currentStatus": "executed",
    "riskProfile": "High",
    "customerCompany": "DataCorp UK Ltd",
    "predictedCloseDate": "2024-10-31",
    "actualCloseDate": "2024-11-01",
    "cycleTime": "12 days",
    "quarter": "Q4 2024",
    "region": "Europe",
    "businessUnit": "EU Operations",
    "isStalled": false,
    "complianceIssues": ["Missing Data Processing Addendum (DPA)", "GDPR compliance risk"]
  },

  {
    "contractId": "G-33333",
    "contractTitle": "Enterprise Support Agreement - Renewal Due",
    "contractType": "Support Agreement",
    "jurisdiction": "California, USA",
    "governingLaw": "California Civil Code",
    "termDuration": "1 year",
    "effectiveDate": "2024-03-01",
    "createdDate": "2024-02-15T00:00:00Z",
    "terminationClause": "Either party may terminate with 30 days written notice.",
    "disputeResolution": "California Courts",
    "confidentialityPeriod": "1 year post-termination",
    "renewalClause": "Auto-renews unless terminated 60 days prior to renewal.",
    "renewalDate": "2025-03-01",
    "contractValue": 850000,
    "currency": "USD",
    "priority": "High",
    "urgency": "Medium",
    "parties": [
      "Spotdraft Technologies Pvt. Ltd.",
      "MegaCorp Inc"
    ],
    "assignedOwner": {
      "name": "Lisa Park",
      "email": "lisa.park@spotdraft.com",
      "department": "Customer Success",
      "team": "US Sales Team"
    },
    "clauses": {
      "nonCompete": false,
      "liabilityCap": "USD 425,000",
      "paymentTerms": "Net 30 Days",
      "dataProcessingAddendum": true,
      "governingLawClause": "Standard"
    },
    "specialTerms": [
      "24/7 enterprise support included",
      "Dedicated customer success manager",
      "Priority bug fixes and features"
    ],
    "counterpartyResponseTimes": [
      {
        "name": "Spotdraft Technologies Pvt. Ltd.",
        "respondedIn": "1 day",
        "firstResponseDate": "2024-02-16"
      },
      {
        "name": "MegaCorp Inc",
        "respondedIn": "1 day",
        "firstResponseDate": "2024-02-16"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-02-15T00:00:00Z",
        "updatedBy": "US Sales Team",
        "timeInStage": "1 day"
      },
      {
        "status": "legal review",
        "updatedAt": "2024-02-16T00:00:00Z",
        "updatedBy": "Legal Team",
        "timeInStage": "2 days"
      },
      {
        "status": "executed",
        "updatedAt": "2024-02-18T00:00:00Z",
        "updatedBy": "MegaCorp Inc",
        "timeInStage": "0 days"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-02-15T00:00:00Z",
        "action": "created",
        "user": "lisa.park@spotdraft.com",
        "comment": "Enterprise support renewal agreement."
      },
      {
        "timestamp": "2024-02-18T00:00:00Z",
        "action": "signed",
        "user": "legal@megacorp.com",
        "comment": "Successfully executed."
      }
    ],
    "currentStatus": "executed",
    "riskProfile": "Medium",
    "customerCompany": "MegaCorp Inc",
    "predictedCloseDate": "2024-02-20",
    "actualCloseDate": "2024-02-18",
    "cycleTime": "3 days",
    "quarter": "Q1 2024",
    "region": "North America",
    "businessUnit": "Customer Success",
    "isStalled": false,
    "renewalStatus": "Due in 90 days",
    "daysUntilRenewal": 89
  },

  {
    "contractId": "H-44444",
    "contractTitle": "API Integration Agreement - Current Month",
    "contractType": "Integration Agreement",
    "jurisdiction": "New York, USA",
    "governingLaw": "New York Commercial Law",
    "termDuration": "2 years",
    "effectiveDate": "2024-11-15",
    "createdDate": "2024-11-01T00:00:00Z",
    "terminationClause": "Either party may terminate with 45 days written notice.",
    "disputeResolution": "New York State Courts",
    "confidentialityPeriod": "3 years post-termination",
    "renewalClause": "Manual renewal required with 90 days notice.",
    "renewalDate": "2026-11-15",
    "contractValue": 425000,
    "currency": "USD",
    "priority": "Medium",
    "urgency": "Medium",
    "parties": [
      "Spotdraft Technologies Pvt. Ltd.",
      "IntegrationCorp LLC"
    ],
    "assignedOwner": {
      "name": "Robert Kim",
      "email": "robert.kim@spotdraft.com",
      "department": "Engineering",
      "team": "US Sales Team"
    },
    "clauses": {
      "nonCompete": false,
      "liabilityCap": "USD 212,500",
      "paymentTerms": "Net 45 Days",
      "dataProcessingAddendum": true,
      "governingLawClause": "Standard"
    },
    "specialTerms": [
      "Custom API development included",
      "Integration testing and validation",
      "6-month support period included"
    ],
    "counterpartyResponseTimes": [
      {
        "name": "Spotdraft Technologies Pvt. Ltd.",
        "respondedIn": "2 days",
        "firstResponseDate": "2024-11-03"
      },
      {
        "name": "IntegrationCorp LLC",
        "respondedIn": "3 days",
        "firstResponseDate": "2024-11-05"
      }
    ],
    "statusHistory": [
      {
        "status": "draft",
        "updatedAt": "2024-11-01T00:00:00Z",
        "updatedBy": "US Sales Team",
        "timeInStage": "4 days"
      },
      {
        "status": "legal review",
        "updatedAt": "2024-11-05T00:00:00Z",
        "updatedBy": "Tech Legal Team",
        "timeInStage": "6 days"
      },
      {
        "status": "redline",
        "updatedAt": "2024-11-11T00:00:00Z",
        "updatedBy": "IntegrationCorp LLC",
        "timeInStage": "2 days"
      },
      {
        "status": "preview",
        "updatedAt": "2024-11-13T00:00:00Z",
        "updatedBy": "Spotdraft Technologies Pvt. Ltd.",
        "timeInStage": "2 days"
      },
      {
        "status": "executed",
        "updatedAt": "2024-11-15T00:00:00Z",
        "updatedBy": "IntegrationCorp LLC",
        "timeInStage": "0 days"
      }
    ],
    "logs": [
      {
        "timestamp": "2024-11-01T00:00:00Z",
        "action": "created",
        "user": "robert.kim@spotdraft.com",
        "comment": "API integration agreement for enterprise client."
      },
      {
        "timestamp": "2024-11-15T00:00:00Z",
        "action": "signed",
        "user": "legal@integrationcorp.com",
        "comment": "Successfully executed."
      }
    ],
    "currentStatus": "executed",
    "riskProfile": "Low",
    "customerCompany": "IntegrationCorp LLC",
    "predictedCloseDate": "2024-11-14",
    "actualCloseDate": "2024-11-15",
    "cycleTime": "14 days",
    "quarter": "Q4 2024",
    "region": "North America",
    "businessUnit": "Technical Sales",
    "isStalled": false
  }
]

const getContractData = async () => {
  try {
   const response = await fetch(`${process.env.BECKEND_URL}/contracts/`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
   })

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Failed to get contract data:', error.message);
    throw error;
  }
}

module.exports = { contractDataStored, getContractData };