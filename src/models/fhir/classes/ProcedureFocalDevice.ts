/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  IProcedureFocalDevice,
  Reference,
  FhirType
} from "../internal";

@FhirType("ProcedureFocalDevice", "BackboneElement")
export class ProcedureFocalDevice extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Procedure.FocalDevice";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public action?: CodeableConcept;

  @FhirField("Reference")
  public manipulated?: Reference;

  public static parse(
    json: IProcedureFocalDevice,
    providedInstance: ProcedureFocalDevice = new ProcedureFocalDevice()
  ): ProcedureFocalDevice {
    const newInstance: ProcedureFocalDevice = BackboneElement.parse(json, providedInstance);
  
    if (json.action !== undefined) {
      newInstance.action = CodeableConcept.parse(json.action);
    }
    if (json.manipulated !== undefined) {
      newInstance.manipulated = Reference.parse(json.manipulated);
    }
    return newInstance;
  }

  public static isProcedureFocalDevice(input?: unknown): input is ProcedureFocalDevice {
    const castInput = input as ProcedureFocalDevice;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ProcedureFocalDevice";
  }

  public toJSON(): IProcedureFocalDevice {
    const result: IProcedureFocalDevice = super.toJSON();

    if (this.action) {
      result.action = this.action.toJSON();
    }

    if (this.manipulated) {
      result.manipulated = this.manipulated.toJSON();
    }

    return result;
  }

  public clone(): ProcedureFocalDevice {
    return ProcedureFocalDevice.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ProcedureFocalDevice";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
