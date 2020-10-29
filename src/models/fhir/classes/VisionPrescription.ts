/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  DomainResource,
  Extension,
  Identifier,
  IVisionPrescription,
  PrimitiveDateTime,
  Reference,
  VisionPrescriptionLensSpecification,
  VisionStatus,
  FieldMetadata
} from "../internal";

export class VisionPrescription extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "VisionPrescription";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: true
    }, {
      fieldName: "status",
      fieldType: [VisionStatus],
      isArray: false
    }, {
      fieldName: "created",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }, {
      fieldName: "patient",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "encounter",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "dateWritten",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }, {
      fieldName: "prescriber",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "lensSpecification",
      fieldType: [VisionPrescriptionLensSpecification],
      isArray: true
    }];
  }

  public identifier?: Array<Identifier>;

  public status?: VisionStatus;

  public created?: PrimitiveDateTime;

  public patient?: Reference;

  public encounter?: Reference;

  public dateWritten?: PrimitiveDateTime;

  public prescriber?: Reference;

  public lensSpecification?: Array<VisionPrescriptionLensSpecification>;

  public static parse(
    json: IVisionPrescription,
    providedInstance: VisionPrescription = new VisionPrescription()
  ): VisionPrescription {
    const newInstance: VisionPrescription = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = VisionStatus.parsePrimitive(json.status, json._status);
    }
    if (json.created !== undefined) {
      newInstance.created = PrimitiveDateTime.parsePrimitive(json.created, json._created);
    }
    if (json.patient !== undefined) {
      newInstance.patient = Reference.parse(json.patient);
    }
    if (json.encounter !== undefined) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.dateWritten !== undefined) {
      newInstance.dateWritten = PrimitiveDateTime.parsePrimitive(json.dateWritten, json._dateWritten);
    }
    if (json.prescriber !== undefined) {
      newInstance.prescriber = Reference.parse(json.prescriber);
    }
    if (json.lensSpecification !== undefined) {
      newInstance.lensSpecification = json.lensSpecification.map((x) => VisionPrescriptionLensSpecification.parse(x));
    }
    return newInstance;
  }

  public static isVisionPrescription(input?: unknown): input is VisionPrescription {
    const castInput = input as VisionPrescription;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "VisionPrescription";
  }

  public toJSON(): IVisionPrescription {
    const result: IVisionPrescription = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.created) {
      result.created = this.created.value;
      result._created = Extension.serializePrimitiveExtension(this.created);
    }

    if (this.patient) {
      result.patient = this.patient.toJSON();
    }

    if (this.encounter) {
      result.encounter = this.encounter.toJSON();
    }

    if (this.dateWritten) {
      result.dateWritten = this.dateWritten.value;
      result._dateWritten = Extension.serializePrimitiveExtension(this.dateWritten);
    }

    if (this.prescriber) {
      result.prescriber = this.prescriber.toJSON();
    }

    if (this.lensSpecification) {
      result.lensSpecification = this.lensSpecification.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): VisionPrescription {
    return VisionPrescription.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "VisionPrescription";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
