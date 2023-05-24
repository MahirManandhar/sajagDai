const mongoose = require("mongoose");
const { Schema } = mongoose;

const planSchema = new mongoose.Schema({
  //user_id:{ },

  //   plan_id:{
  //     type:mongoose.Schema.Types.ObjectId,
  //     required:false,
  //     ref:'Plan'
  // },
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  placestovisit: [
    new mongoose.Schema(
      {
        // place_id:{type:mongoose.Schema.Types.ObjectId, required:false, ref:'Plan'},
        name: { type: String, required: true, unique: true },
        imageUrl: { type: String, required: false },
        notes: [
          new mongoose.Schema(
            {
              // note_id:{type:mongoose.Schema.Types.ObjectId, required:false, ref:'Plan'},
              note: { type: String, required: false },
            },
            { strict: false }
          ),
        ],
      },
      { strict: false }
    ),
  ],

  Itinerary: [
    new mongoose.Schema(
      {
        date: {
          type: Date,
          required: true,
        },
        daynotes: [
          new mongoose.Schema(
            {
              note: { type: String, required: false },
            },
            { strict: false }
          ),
        ],
        placesitinerary: [
          new mongoose.Schema(
            {
              name: { type: String, required: true, unique: true },
              imageUrl: { type: String, required: false },
              // notes: [
              //   new mongoose.Schema(
              //     {
              //       note_id: {
              //         type: mongoose.Schema.Types.ObjectId,
              //         required: false,
              //         // ref: "Plan",
              //       },
              //       note: { type: String, required: false },
              //     },
              //     { strict: false }
              //   ),
              // ],
            },
            { strict: false }
          ),
        ],
      },
      { strict: false }
    ),
  ],
});

const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan;
