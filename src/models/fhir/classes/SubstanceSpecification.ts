/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  Identifier,
  ISubstanceSpecification,
  PrimitiveString,
  Reference,
  SubstanceSpecificationCode,
  SubstanceSpecificationMoiety,
  SubstanceSpecificationName,
  SubstanceSpecificationProperty,
  SubstanceSpecificationRelationship,
  SubstanceSpecificationStructure,
  SubstanceSpecificationStructureIsotopeMolecularWeight,
  FhirType
} from "../internal";

@FhirType("SubstanceSpecification", "DomainResource")
export class SubstanceSpecification extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceSpecification";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Identifier")
  public identifier?: Identifier;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("CodeableConcept")
  public status?: CodeableConcept;

  @FhirField("CodeableConcept")
  public domain?: CodeableConcept;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirList("Reference")
  public source?: Array<Reference>;

  @FhirField("PrimitiveString")
  public comment?: PrimitiveString;

  @FhirList("SubstanceSpecificationMoiety")
  public moiety?: Array<SubstanceSpecificationMoiety>;

  @FhirList("SubstanceSpecificationProperty")
  public property?: Array<SubstanceSpecificationProperty>;

  @FhirField("Reference")
  public referenceInformation?: Reference;

  @FhirField("SubstanceSpecificationStructure")
  public structure?: SubstanceSpecificationStructure;

  @FhirList("SubstanceSpecificationCode")
  public code?: Array<SubstanceSpecificationCode>;

  @FhirList("SubstanceSpecificationName")
  public name?: Array<SubstanceSpecificationName>;

  @FhirList("SubstanceSpecificationStructureIsotopeMolecularWeight")
  public molecularWeight?: Array<SubstanceSpecificationStructureIsotopeMolecularWeight>;

  @FhirList("SubstanceSpecificationRelationship")
  public relationship?: Array<SubstanceSpecificationRelationship>;

  @FhirField("Reference")
  public nucleicAcid?: Reference;

  @FhirField("Reference")
  public polymer?: Reference;

  @FhirField("Reference")
  public protein?: Reference;

  @FhirField("Reference")
  public sourceMaterial?: Reference;

  public static parse(
    json: ISubstanceSpecification,
    providedInstance: SubstanceSpecification = new SubstanceSpecification()
  ): SubstanceSpecification {
    const newInstance: SubstanceSpecification = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.status !== undefined) {
      newInstance.status = CodeableConcept.parse(json.status);
    }
    if (json.domain !== undefined) {
      newInstance.domain = CodeableConcept.parse(json.domain);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.source !== undefined) {
      newInstance.source = json.source.map((x) => Reference.parse(x));
    }
    if (json.comment !== undefined) {
      newInstance.comment = PrimitiveString.parsePrimitive(json.comment, json._comment);
    }
    if (json.moiety !== undefined) {
      newInstance.moiety = json.moiety.map((x) => SubstanceSpecificationMoiety.parse(x));
    }
    if (json.property !== undefined) {
      newInstance.property = json.property.map((x) => SubstanceSpecificationProperty.parse(x));
    }
    if (json.referenceInformation !== undefined) {
      newInstance.referenceInformation = Reference.parse(json.referenceInformation);
    }
    if (json.structure !== undefined) {
      newInstance.structure = SubstanceSpecificationStructure.parse(json.structure);
    }
    if (json.code !== undefined) {
      newInstance.code = json.code.map((x) => SubstanceSpecificationCode.parse(x));
    }
    if (json.name !== undefined) {
      newInstance.name = json.name.map((x) => SubstanceSpecificationName.parse(x));
    }
    if (json.molecularWeight !== undefined) {
      newInstance.molecularWeight = json.molecularWeight.map((x) => SubstanceSpecificationStructureIsotopeMolecularWeight.parse(x));
    }
    if (json.relationship !== undefined) {
      newInstance.relationship = json.relationship.map((x) => SubstanceSpecificationRelationship.parse(x));
    }
    if (json.nucleicAcid !== undefined) {
      newInstance.nucleicAcid = Reference.parse(json.nucleicAcid);
    }
    if (json.polymer !== undefined) {
      newInstance.polymer = Reference.parse(json.polymer);
    }
    if (json.protein !== undefined) {
      newInstance.protein = Reference.parse(json.protein);
    }
    if (json.sourceMaterial !== undefined) {
      newInstance.sourceMaterial = Reference.parse(json.sourceMaterial);
    }
    return newInstance;
  }

  public static isSubstanceSpecification(input?: unknown): input is SubstanceSpecification {
    const castInput = input as SubstanceSpecification;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceSpecification";
  }

  public toJSON(): ISubstanceSpecification {
    const result: ISubstanceSpecification = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.toJSON();
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.status) {
      result.status = this.status.toJSON();
    }

    if (this.domain) {
      result.domain = this.domain.toJSON();
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.source) {
      result.source = this.source.map((x) => x.toJSON());
    }

    if (this.comment) {
      result.comment = this.comment.value;
      result._comment = Extension.serializePrimitiveExtension(this.comment);
    }

    if (this.moiety) {
      result.moiety = this.moiety.map((x) => x.toJSON());
    }

    if (this.property) {
      result.property = this.property.map((x) => x.toJSON());
    }

    if (this.referenceInformation) {
      result.referenceInformation = this.referenceInformation.toJSON();
    }

    if (this.structure) {
      result.structure = this.structure.toJSON();
    }

    if (this.code) {
      result.code = this.code.map((x) => x.toJSON());
    }

    if (this.name) {
      result.name = this.name.map((x) => x.toJSON());
    }

    if (this.molecularWeight) {
      result.molecularWeight = this.molecularWeight.map((x) => x.toJSON());
    }

    if (this.relationship) {
      result.relationship = this.relationship.map((x) => x.toJSON());
    }

    if (this.nucleicAcid) {
      result.nucleicAcid = this.nucleicAcid.toJSON();
    }

    if (this.polymer) {
      result.polymer = this.polymer.toJSON();
    }

    if (this.protein) {
      result.protein = this.protein.toJSON();
    }

    if (this.sourceMaterial) {
      result.sourceMaterial = this.sourceMaterial.toJSON();
    }

    return result;
  }

  public clone(): SubstanceSpecification {
    return SubstanceSpecification.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceSpecification";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
