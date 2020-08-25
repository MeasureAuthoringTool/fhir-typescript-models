/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  Extension,
  Identifier,
  IInsurancePlan,
  InsurancePlanContact,
  InsurancePlanCoverage,
  InsurancePlanPlan,
  Period,
  PrimitiveString,
  PublicationStatus,
  Reference,
} from "../internal";

export class InsurancePlan extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "InsurancePlan";

  public identifier?: Array<Identifier>;

  public status?: PublicationStatus;

  public type?: Array<CodeableConcept>;

  public name?: PrimitiveString;

  public alias?: Array<PrimitiveString>;

  public period?: Period;

  public ownedBy?: Reference;

  public administeredBy?: Reference;

  public coverageArea?: Array<Reference>;

  public contact?: Array<InsurancePlanContact>;

  public endpoint?: Array<Reference>;

  public network?: Array<Reference>;

  public coverage?: Array<InsurancePlanCoverage>;

  public plan?: Array<InsurancePlanPlan>;

  public static parse(
    json: IInsurancePlan,
    providedInstance: InsurancePlan = new InsurancePlan()
  ): InsurancePlan {
    const newInstance: InsurancePlan = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status) {
      newInstance.status = PublicationStatus.parsePrimitive(json.status, json._status);
    }
    if (json.type) {
      newInstance.type = json.type.map((x) => CodeableConcept.parse(x));
    }
    if (json.name) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.alias) {
      newInstance.alias = json.alias.map((x, i) => {
        const ext = json._alias && json._alias[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.period) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.ownedBy) {
      newInstance.ownedBy = Reference.parse(json.ownedBy);
    }
    if (json.administeredBy) {
      newInstance.administeredBy = Reference.parse(json.administeredBy);
    }
    if (json.coverageArea) {
      newInstance.coverageArea = json.coverageArea.map((x) => Reference.parse(x));
    }
    if (json.contact) {
      newInstance.contact = json.contact.map((x) => InsurancePlanContact.parse(x));
    }
    if (json.endpoint) {
      newInstance.endpoint = json.endpoint.map((x) => Reference.parse(x));
    }
    if (json.network) {
      newInstance.network = json.network.map((x) => Reference.parse(x));
    }
    if (json.coverage) {
      newInstance.coverage = json.coverage.map((x) => InsurancePlanCoverage.parse(x));
    }
    if (json.plan) {
      newInstance.plan = json.plan.map((x) => InsurancePlanPlan.parse(x));
    }
    return newInstance;
  }

  public static isInsurancePlan(input?: unknown): input is InsurancePlan {
    const castInput = input as InsurancePlan;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "InsurancePlan";
  }

  public toJSON(): IInsurancePlan {
    const result: IInsurancePlan = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.type) {
      result.type = this.type.map((x) => x.toJSON());
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.alias) {
      result.alias = this.alias.filter(x => !!x).map(x => x.value) as typeof result.alias;
      result._alias = Extension.serializePrimitiveExtensionArray(this.alias);
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    if (this.ownedBy) {
      result.ownedBy = this.ownedBy.toJSON();
    }

    if (this.administeredBy) {
      result.administeredBy = this.administeredBy.toJSON();
    }

    if (this.coverageArea) {
      result.coverageArea = this.coverageArea.map((x) => x.toJSON());
    }

    if (this.contact) {
      result.contact = this.contact.map((x) => x.toJSON());
    }

    if (this.endpoint) {
      result.endpoint = this.endpoint.map((x) => x.toJSON());
    }

    if (this.network) {
      result.network = this.network.map((x) => x.toJSON());
    }

    if (this.coverage) {
      result.coverage = this.coverage.map((x) => x.toJSON());
    }

    if (this.plan) {
      result.plan = this.plan.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "InsurancePlan";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
