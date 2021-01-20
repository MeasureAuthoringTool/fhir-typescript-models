/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  FhirList,
  IContractTermActionSubject,
  Reference,
  FhirType
} from "../internal";

@FhirType("ContractTermActionSubject", "BackboneElement")
export class ContractTermActionSubject extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Contract.Term.Action.Subject";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Reference")
  public reference?: Array<Reference>;

  @FhirField("CodeableConcept")
  public role?: CodeableConcept;

  public static parse(
    json: IContractTermActionSubject,
    providedInstance: ContractTermActionSubject = new ContractTermActionSubject()
  ): ContractTermActionSubject {
    const newInstance: ContractTermActionSubject = BackboneElement.parse(json, providedInstance);
  
    if (json.reference !== undefined) {
      newInstance.reference = json.reference.map((x) => Reference.parse(x));
    }
    if (json.role !== undefined) {
      newInstance.role = CodeableConcept.parse(json.role);
    }
    return newInstance;
  }

  public static isContractTermActionSubject(input?: unknown): input is ContractTermActionSubject {
    const castInput = input as ContractTermActionSubject;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ContractTermActionSubject";
  }

  public toJSON(): IContractTermActionSubject {
    const result: IContractTermActionSubject = super.toJSON();

    if (this.reference) {
      result.reference = this.reference.map((x) => x.toJSON());
    }

    if (this.role) {
      result.role = this.role.toJSON();
    }

    return result;
  }

  public clone(): ContractTermActionSubject {
    return ContractTermActionSubject.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ContractTermActionSubject";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
