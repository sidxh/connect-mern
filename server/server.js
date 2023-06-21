const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 8000;

const cors = require('cors');
app.use(cors());


// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://bajajdivya02:gQ0Pdc6zqDHvno9c@cluster0.bvgblbe.mongodb.net/example",
    {
      useNewUrlParser: true,
      //useUnifiedTopology: true
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
    // app.listen(port, () => {
    //   console.log(`Server started on port ${port}`);
    // });
  })
  .catch((err) => console.error("Error connecting to MongDB", err));

// Define a schema for the data
const inventorySchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  "Email ID": {
    type: String,
    required: true,
  },
  "Roll No": {
    "": {
      type: String,
    },
  },
  "LinkedIn Handle": {
    type: String,
  },
  "Web Technologies": {
    type: String,
  },
  "What is your Technical Skillset (any software/language) in the selected domain? (WT)":
    {
      type: String,
    },
  "What is your Experience (however little) in the selected domain? (WT)":
    {
      type: String,
    },
  "What are your Achievements (however small) in the selected domain? (WT)": {
    type: String,
  },
  "Non - Technical (If Proficient in any)": {
    type: String,
  },
  "What is your Skillset (any software/language) in the selected domain? (NT)":
    {
      type: String,
    },
  "What is your Experience (however little) in the selected domain? (NT)":
    {
      type: String,
    },
  "What are your Achievements (however small) in the selected domain? (NT)": {
    type: String,
  },
  "Media & Design (If Proficient in any)": {
    type: String,
  },
  "What is your Skillset (any software/language) in the selected domain? (MD)":
    {
      type: String,
    },
  "What is your Experience (however little) in the selected domain? (MD)":
    {
      type: String,
    },
  "What are your Achievements (however small) in the selected domain? (MD)": {
    type: String,
  },
  "Core Domains (If Proficient in any)": {
    type: String,
  },
  "What is your Skillset (any software/language) in the selected domain? (CD)":
    {
      type: String,
    },
  "What is your Experience (however little) in the selected domain? (CD)":
    {
      type: String,
    },
  "What are your Achievements (however small) in the selected domain? (CD)": {
    type: String,
  },
  "Miscellaneous (If Proficient in any)": {
    type: String,
  },
  "What is your Skillset (any software/language) in the selected domain? (MC)":
    {
      type: String,
    },
  "What is your Experience (however insignificant) in the selected domain? (MC)":
    {
      type: String,
    },
  "What are your Achievements (however small) in the selected domain? (MC)": {
    type: String,
  },
});

// Create a model based on the schema
const Inventory = mongoose.model("inventory", inventorySchema);


app.get("/items", (req, res) => {
  Inventory.find()
    .then((items) => {
      console.log("Items:", items);
      const itemsArray = items.map((item) => item.toObject());
      res.json(items);
    })
    .catch((error) => {
      console.log("Error fetching data:", error);
      res.status(500).json({ error: "Error fetching data" });
    });
});

app.get("/web-technologies", (req, res) => {
  Inventory.find({
    "Web Technologies": { $exists: true, $ne: "" },
  })
    .then((applicants) => {
      let i = 1;
      const webTechApplicants = applicants.map((applicant) => {
        let skill = applicant.get("Web Technologies");
        if (skill === "Frontend Development") {
          skill = "frontend-development";
        } else if (skill === "Backend Development") {
          skill = "backend-development";
        } else if (skill === "Application Development") {
          skill = "application-development";
        } else if (skill === "Artificial Intelligence & Machine Learning") {
          skill = "ai-ml";
        } else if (skill === "Game Development") {
          skill = "game-development";
        } else if (skill === "DevOps") {
          skill = "devops";
        } else if (skill === "Quantum Computing") {
          skill = "quantum-computing";
        } else if (skill === "Cloud Computing") {
          skill = "cloud-computing";
        } else if (skill === "Augmented & Virtual Reality") {
          skill = "ar-vr";
        } else if (skill === "Cybersecurity") {
          skill = "cyber-security";
        } else if (skill === "Data Science") {
          skill = "data-science";
        } else if (skill === "Blockchain Development") {
          skill = "blockchain-development";
        } else if (skill === "Full Stack Development") {
          skill = "fullstack-development";
        } else if (skill === "Data Structures & Algorithms") {
          skill = "data-structures-algorithms";
        } else if (skill === "Competitive Programming") {
          skill = "competitive-programming";
        } else if (skill === "Technical Writing") {
          skill = "technical-writing";
        }

        return {
          category: "web-technologies",
          skill: skill,
          name: applicant.Name,
          // // "Roll No." : applicant.get('Roll No'),
          "skillset": applicant.get(
            "What is your Technical Skillset (any software/language) in the selected domain? (WT)"
          ),
          experience: applicant.get("What is your Experience (however little) in the selected domain? (WT)"),
          rollno: applicant["Roll No"][""].toString(),

          achievement: applicant.get(
            "What are your Achievements (however small) in the selected domain? (WT)"
          ),
          id: i++,

          email: applicant.get("Email ID"),
          linkedin: applicant.get("LinkedIn Handle"),


          // Add more fields as needed
        };
        
      });
      res.json(webTechApplicants);
    })
    .catch((error) => {
      console.log("Error fetching data:", error);
      res.status(500).json({ error: "Error fetching data" });
    });
});

app.get("/non-technical", (req, res) => {
  Inventory.find({
    "Non - Technical (If Proficient in any)": { $exists: true, $ne: "" },
  })
    .then((applicants) => {
      let i = 1;
      const NonTechApplicants = applicants.map((applicant) => {
        let skill = applicant.get("Non - Technical (If Proficient in any)");
        if (skill === "Sales") {
          skill = "sales";
        } else if (skill === "Business Associate") {
          skill = "business-associate";
        } else if (skill === "Copy Writing") {
          skill = "copy-writing";
        } else if (skill === "Social Media Management") {
          skill = "social-media-management";
        } else if (skill === "Community Management") {
          skill = "community-management";
        } else if (skill === "Digital Marketing") {
          skill = "digital-marketing";
        } else if (skill === "Graphic Designing") {
          skill = "graphic-designing";
        } else if (skill === "Influencer Marketing") {
          skill = "influencer-marketing";
        }
        return {
          category: "non-technical",
          skill: skill,
          name: applicant.Name,
          // "Roll No." : applicant.get('Roll No'),
          skillset: applicant.get(
            "What is your Skillset (any software/language) in the selected domain? (NT)"
          ),
          experience: applicant.get("What is your Experience (however little) in the selected domain? (NT)"),
          rollno: applicant["Roll No"][""].toString(),
          achievement: applicant.get(
            "What are your Achievements (however small) in the selected domain? (NT)"
          ),
          id : i++,
          // id: uuidv4(), // Generate a unique ID
          email: applicant.get("Email ID"),
          linkedin: applicant.get("LinkedIn Handle"),
          // Add more fields as needed
        };
      });
      res.json(NonTechApplicants);
    })
    .catch((error) => {
      console.log("Error fetching data:", error);
      res.status(500).json({ error: "Error fetching data" });
    });
});

app.get("/media-design", (req, res) => {
  Inventory.find({
    "Media & Design (If Proficient in any)": { $exists: true, $ne: "" },
  })
    .then((applicants) => {
      let i = 1;
      const MediaDesignApplicants = applicants.map((applicant) => {
        let skill = applicant.get("Media & Design (If Proficient in any)");
        if (skill === "UI UX Designing") {
          skill = "ui-ux";
        } else if (skill === "Product Designing") {
          skill = "product-designing";
        } else if (skill === "Film Making") {
          skill = "film-making";
        } else if (skill === "Photography") {
          skill = "photography";
        } else if (skill === "VFX") {
          skill = "vfx";
        } else if (skill === "2D/3D Animations") {
          skill = "animations";
        } else if (skill === "3D Modeling") {
          skill = "3d-modeling";
        } else if (skill === "Motion Graphics") {
          skill = "motion-graphics";
        } else if (skill === "Graphic Designing") {
          skill = "graphic-designing";
        } else if (skill === "Video Editing") {
          skill = "video-editing";
        }
        return {
          category: "media-design",
          skill: skill,
          name: applicant.Name,
          // "Roll No." : applicant.get('Roll No'),
          skillset: applicant.get(
            "What is your Skillset (any software/language) in the selected domain? (MD)"
          ),
          experience: applicant.get("What is your Experience (however little) in the selected domain? (MD)"),
          rollno: applicant["Roll No"][""].toString(),
          achievement: applicant.get(
            "What are your Achievements (however small) in the selected domain? (MD)"
          ),
          id: i++,
          // id: uuidv4(), // Generate a unique ID
          email: applicant.get("Email ID"),
          linkedin: applicant.get("LinkedIn Handle"),
          // Add more fields as needed
        };
      });
      res.json(MediaDesignApplicants);
    })
    .catch((error) => {
      console.log("Error fetching data:", error);
      res.status(500).json({ error: "Error fetching data" });
    });
});

app.get("/core-domains", (req, res) => {
  Inventory.find({
    "Core Domains (If Proficient in any)": { $exists: true, $ne: "" },
  })
    .then((applicants) => {
      let i = 1;
      const CoreDomainsApplicants = applicants.map((applicant) => {
        let skill = applicant.get("Core Domains (If Proficient in any)");
        if (skill === "3D Printing") {
          skill = "3d-printing";
        } else if (skill === "Welding") {
          skill = "welding";
        } else if (skill === "Metal Fabrication") {
          skill = "metal-fabrication";
        } else if (skill === "Mechanical Design & Modeling") {
          skill = "mechanical-design";
        } else if (skill === "Machine Operations") {
          skill = "machine-operations";
        } else if (skill === "Robotics & Automation") {
          skill = "robotics-automation";
        } else if (skill === "Mechatronics") {
          skill = "mechatronics";
        } else if (skill === "Systems Engineering") {
          skill = "systems-engineering";
        } else if (skill === "Embedded Systems") {
          skill = "embedded-systems";
        } else if (skill === "Digital Signal Processing") {
          skill = "digital-signal-processing";
        } else if (skill === "Microcontroller Programming") {
          skill = "microcontroller-programming";
        } else if (skill === "PCB Designing") {
          skill = "pcb-designing";
        } else if (skill === "FGPA Programming") {
          skill = "fgpa-programming";
        } else if (skill === "Internet Of Things") {
          skill = "internet-of-things";
        } else if (skill === "Analog & Digital Electronics") {
          skill = "analog-digital-electronics";
        } else if (skill === "Wireless Communication") {
          skill = "wireless-communication";
        }

        return {
          category: "core-domains",
          skill: skill,
          name: applicant.Name,
          // "Roll No." : applicant.get('Roll No'),
          skillset: applicant.get(
            "What is your Skillset (any software/language) in the selected domain? (CD)"
          ),
          experience: applicant.get("What is your Experience (however little) in the selected domain? (CD)"),
          rollno: applicant["Roll No"][""].toString(),
          achievement: applicant.get(
            "What are your Achievements (however small) in the selected domain? (CD)"
          ),
          id: i++,
          // id: uuidv4(), // Generate a unique ID
          email: applicant.get("Email ID"),
          linkedin: applicant.get("LinkedIn Handle"),
          // Add more fields as needed
        };
      });
      res.json(CoreDomainsApplicants);
    })
    .catch((error) => {
      console.log("Error fetching data:", error);
      res.status(500).json({ error: "Error fetching data" });
    });
});



app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
