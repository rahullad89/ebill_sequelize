const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bill', {
    bill_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    bill_no: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    bill_mon: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    mobileno: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    group: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    contract_acc: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    billgroup: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sent_flag: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    link_param: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sent_ts: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tracking_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    viewed_flag: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    viewed_ts: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    delivered_flag: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    delivered_ts: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    intmdt_view_flag: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    intmdt_view_ts: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    billKey: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TrackingID: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    bill_templete_path: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    bill_date: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    viewed_flag_mar: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    viewed_ts_mar: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    viewed_flag_eng: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    viewed_ts_eng: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bill',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bill_id" },
        ]
      },
      {
        name: "Summary",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bill_id" },
          { name: "sent_flag" },
          { name: "delivered_flag" },
          { name: "viewed_flag_mar" },
          { name: "viewed_flag_eng" },
        ]
      },
      {
        name: "bill_no_index",
        using: "BTREE",
        fields: [
          { name: "bill_no" },
        ]
      },
      {
        name: "billKey_index",
        using: "BTREE",
        fields: [
          { name: "billKey" },
        ]
      },
      {
        name: "trackingid_index",
        using: "BTREE",
        fields: [
          { name: "tracking_id" },
        ]
      },
      {
        name: "sent_flag",
        using: "BTREE",
        fields: [
          { name: "sent_flag" },
        ]
      },
      {
        name: "billgroup",
        using: "BTREE",
        fields: [
          { name: "billgroup" },
        ]
      },
      {
        name: "delivery_flag",
        using: "BTREE",
        fields: [
          { name: "delivered_flag" },
        ]
      },
      {
        name: "viewed_flag",
        using: "BTREE",
        fields: [
          { name: "viewed_flag" },
        ]
      },
      {
        name: "bill_mon",
        using: "BTREE",
        fields: [
          { name: "bill_mon" },
        ]
      },
      {
        name: "contract_acc",
        using: "BTREE",
        fields: [
          { name: "contract_acc" },
        ]
      },
      {
        name: "TrackingID",
        using: "BTREE",
        fields: [
          { name: "TrackingID" },
        ]
      },
      {
        name: "mobileno",
        using: "BTREE",
        fields: [
          { name: "mobileno" },
        ]
      },
      {
        name: "delivery_ts",
        using: "BTREE",
        fields: [
          { name: "delivered_ts" },
        ]
      },
    ]
  });
};
