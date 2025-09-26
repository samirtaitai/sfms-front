import {
  Injectable,
  __decorate,
  __esm,
  init_core,
  init_tslib_es6
} from "./chunk-QKEEE2EE.js";

// __mocks__/customers.ts
function getCustomers() {
  return customers;
}
function getOes() {
  return [...OES];
}
function getApplications() {
  return applications;
}
var customers, OES, applications;
var init_customers = __esm({
  "__mocks__/customers.ts"() {
    "use strict";
    customers = [
      { name: "BMP", description: "BMP", id: "1" }
    ];
    OES = [
      { name: "GERMANY", code: "DE", debtor: "1111" }
    ];
    applications = [
      { name: "BPM_SFMS_TEST", description: "BPM test application", id: "1" }
    ];
  }
});

// src/app/consts/max-length.ts
var ApplicationMaxLength, ApplicationFlowMaxLength, BillingAccountMaxLength, ConfigurationMaxLength, ConsumerMaxLength;
var init_max_length = __esm({
  "src/app/consts/max-length.ts"() {
    "use strict";
    (function(ApplicationMaxLength2) {
      ApplicationMaxLength2[ApplicationMaxLength2["name"] = 60] = "name";
      ApplicationMaxLength2[ApplicationMaxLength2["description"] = 120] = "description";
    })(ApplicationMaxLength || (ApplicationMaxLength = {}));
    (function(ApplicationFlowMaxLength2) {
      ApplicationFlowMaxLength2[ApplicationFlowMaxLength2["flowCode"] = 60] = "flowCode";
      ApplicationFlowMaxLength2[ApplicationFlowMaxLength2["description"] = 120] = "description";
    })(ApplicationFlowMaxLength || (ApplicationFlowMaxLength = {}));
    (function(BillingAccountMaxLength2) {
      BillingAccountMaxLength2[BillingAccountMaxLength2["name"] = 60] = "name";
      BillingAccountMaxLength2[BillingAccountMaxLength2["billingManagerEmail"] = 60] = "billingManagerEmail";
      BillingAccountMaxLength2[BillingAccountMaxLength2["technicalManagerEmail"] = 60] = "technicalManagerEmail";
    })(BillingAccountMaxLength || (BillingAccountMaxLength = {}));
    (function(ConfigurationMaxLength2) {
      ConfigurationMaxLength2[ConfigurationMaxLength2["configKey"] = 60] = "configKey";
      ConfigurationMaxLength2[ConfigurationMaxLength2["configValue"] = 256] = "configValue";
    })(ConfigurationMaxLength || (ConfigurationMaxLength = {}));
    (function(ConsumerMaxLength2) {
      ConsumerMaxLength2[ConsumerMaxLength2["consumerKey"] = 60] = "consumerKey";
      ConsumerMaxLength2[ConsumerMaxLength2["oidcInstrospectUri"] = 256] = "oidcInstrospectUri";
      ConsumerMaxLength2[ConsumerMaxLength2["oidcProvider"] = 50] = "oidcProvider";
      ConsumerMaxLength2[ConsumerMaxLength2["complianceRegion"] = 60] = "complianceRegion";
    })(ConsumerMaxLength || (ConsumerMaxLength = {}));
  }
});

// src/app/core/models/customer.ts
var CustomerDetails;
var init_customer = __esm({
  "src/app/core/models/customer.ts"() {
    "use strict";
    init_max_length();
    CustomerDetails = class {
      _name;
      get name() {
        return this._name;
      }
      set name(value) {
        if (value.length > ConsumerMaxLength.consumerKey) {
          throw new Error(`Customer Name cannot exceed ${ConsumerMaxLength.consumerKey} characters.`);
        }
        this._name = value;
      }
      _description;
      get description() {
        return this._description;
      }
      set description(value) {
        if (value.length > ConsumerMaxLength.consumerKey) {
          throw new Error(`Customer Detail cannot exceed ${ConsumerMaxLength.consumerKey} characters.`);
        }
        this._description = value;
      }
      type;
      constructor() {
      }
    };
  }
});

// src/app/core/models/orgEntity.ts
var OrgEntity;
var init_orgEntity = __esm({
  "src/app/core/models/orgEntity.ts"() {
    "use strict";
    init_max_length();
    OrgEntity = class {
      _name;
      get name() {
        return this._name;
      }
      set name(value) {
        if (value.length > ConsumerMaxLength.consumerKey) {
          throw new Error(`ORG ENTITY Name cannot exceed ${ConsumerMaxLength.consumerKey} characters.`);
        }
        this._name = value;
      }
      _code;
      get code() {
        return this._code;
      }
      set code(value) {
        if (value.length > ConsumerMaxLength.consumerKey) {
          throw new Error(`ORG ENTITY Detail cannot exceed ${ConsumerMaxLength.consumerKey} characters.`);
        }
        this._code = value;
      }
      _debtor;
      get debtor() {
        return this._debtor;
      }
      set debtor(value) {
        if (value.length > ConsumerMaxLength.consumerKey) {
          throw new Error(`ORG ENTITY Detail cannot exceed ${ConsumerMaxLength.consumerKey} characters.`);
        }
        this._debtor = value;
      }
    };
  }
});

// src/app/features/customer/customer/customer.ts
var Customer;
var init_customer2 = __esm({
  "src/app/features/customer/customer/customer.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_customers();
    init_customer();
    init_orgEntity();
    Customer = class Customer2 {
      customerDetails = new CustomerDetails();
      orgEntity = new OrgEntity();
      customers = getCustomers();
      orgEntities = getOes();
      applications = getApplications();
      setCustomerData(name, description, type) {
        this.customerDetails.name = name;
        this.customerDetails.description = description;
        this.customerDetails.type = type;
      }
      createCustomer() {
        const { name, description, type } = this.customerDetails;
        this.customers.push({ name, description, type });
      }
      setOrgName(name) {
        this.orgEntity.name = name;
      }
      setOrgCode(code) {
        this.orgEntity.code = code;
      }
      setOrgDebtor(debtor) {
        this.orgEntity.debtor = debtor;
      }
      getAllCustomers() {
        return [...this.customers];
      }
      getAllOe() {
        return [...this.orgEntities];
      }
      getAllApplications() {
        return [...this.applications];
      }
      createOe() {
        this.orgEntities.push(this.orgEntity);
      }
    };
    Customer = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], Customer);
  }
});

export {
  Customer,
  init_customer2 as init_customer
};
//# sourceMappingURL=chunk-H4Q5FXLQ.js.map
