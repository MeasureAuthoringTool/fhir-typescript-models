/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  AdverseEventSuspectEntityCausality,
  BackboneElement,
  IAdverseEventSuspectEntity,
  Reference,
  FieldMetadata
} from "../internal";

export class AdverseEventSuspectEntity extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AdverseEvent.SuspectEntity";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "instance",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "causality",
      fieldType: [AdverseEventSuspectEntityCausality],
      isArray: true
    }];
  }

  public instance?: Reference;

  public causality?: Array<AdverseEventSuspectEntityCausality>;

  public static parse(
    json: IAdverseEventSuspectEntity,
    providedInstance: AdverseEventSuspectEntity = new AdverseEventSuspectEntity()
  ): AdverseEventSuspectEntity {
    const newInstance: AdverseEventSuspectEntity = BackboneElement.parse(json, providedInstance);
  
    if (json.instance !== undefined) {
      newInstance.instance = Reference.parse(json.instance);
    }
    if (json.causality !== undefined) {
      newInstance.causality = json.causality.map((x) => AdverseEventSuspectEntityCausality.parse(x));
    }
    return newInstance;
  }

  public static isAdverseEventSuspectEntity(input?: unknown): input is AdverseEventSuspectEntity {
    const castInput = input as AdverseEventSuspectEntity;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AdverseEventSuspectEntity";
  }

  public toJSON(): IAdverseEventSuspectEntity {
    const result: IAdverseEventSuspectEntity = super.toJSON();

    if (this.instance) {
      result.instance = this.instance.toJSON();
    }

    if (this.causality) {
      result.causality = this.causality.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): AdverseEventSuspectEntity {
    return AdverseEventSuspectEntity.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "AdverseEventSuspectEntity";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
