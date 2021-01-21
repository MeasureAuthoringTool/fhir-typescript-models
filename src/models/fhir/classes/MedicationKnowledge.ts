/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  IMedicationKnowledge,
  MedicationKnowledgeAdministrationGuidelines,
  MedicationKnowledgeCost,
  MedicationKnowledgeDrugCharacteristic,
  MedicationKnowledgeIngredient,
  MedicationKnowledgeKinetics,
  MedicationKnowledgeMedicineClassification,
  MedicationKnowledgeMonitoringProgram,
  MedicationKnowledgeMonograph,
  MedicationKnowledgePackaging,
  MedicationKnowledgeRegulatory,
  MedicationKnowledgeRelatedMedicationKnowledge,
  MedicationKnowledgeStatus,
  PrimitiveMarkdown,
  PrimitiveString,
  Reference,
  SimpleQuantity,
  FhirType
} from "../internal";

@FhirType("MedicationKnowledge", "DomainResource")
export class MedicationKnowledge extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationKnowledge";

  static readonly primaryCodePath: string | null = "code";

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirField("MedicationKnowledgeStatus")
  public status?: MedicationKnowledgeStatus;

  @FhirField("Reference")
  public manufacturer?: Reference;

  @FhirField("CodeableConcept")
  public doseForm?: CodeableConcept;

  @FhirField("SimpleQuantity")
  public amount?: SimpleQuantity;

  @FhirList("PrimitiveString")
  public synonym?: Array<PrimitiveString>;

  @FhirList("MedicationKnowledgeRelatedMedicationKnowledge")
  public relatedMedicationKnowledge?: Array<MedicationKnowledgeRelatedMedicationKnowledge>;

  @FhirList("Reference")
  public associatedMedication?: Array<Reference>;

  @FhirList("CodeableConcept")
  public productType?: Array<CodeableConcept>;

  @FhirList("MedicationKnowledgeMonograph")
  public monograph?: Array<MedicationKnowledgeMonograph>;

  @FhirList("MedicationKnowledgeIngredient")
  public ingredient?: Array<MedicationKnowledgeIngredient>;

  @FhirField("PrimitiveMarkdown")
  public preparationInstruction?: PrimitiveMarkdown;

  @FhirList("CodeableConcept")
  public intendedRoute?: Array<CodeableConcept>;

  @FhirList("MedicationKnowledgeCost")
  public cost?: Array<MedicationKnowledgeCost>;

  @FhirList("MedicationKnowledgeMonitoringProgram")
  public monitoringProgram?: Array<MedicationKnowledgeMonitoringProgram>;

  @FhirList("MedicationKnowledgeAdministrationGuidelines")
  public administrationGuidelines?: Array<MedicationKnowledgeAdministrationGuidelines>;

  @FhirList("MedicationKnowledgeMedicineClassification")
  public medicineClassification?: Array<MedicationKnowledgeMedicineClassification>;

  @FhirField("MedicationKnowledgePackaging")
  public packaging?: MedicationKnowledgePackaging;

  @FhirList("MedicationKnowledgeDrugCharacteristic")
  public drugCharacteristic?: Array<MedicationKnowledgeDrugCharacteristic>;

  @FhirList("Reference")
  public contraindication?: Array<Reference>;

  @FhirList("MedicationKnowledgeRegulatory")
  public regulatory?: Array<MedicationKnowledgeRegulatory>;

  @FhirList("MedicationKnowledgeKinetics")
  public kinetics?: Array<MedicationKnowledgeKinetics>;

  get primaryCode(): CodeableConcept | undefined {
    return this?.code;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.code = primaryCode;
  }

  public static parse(
    json: IMedicationKnowledge,
    providedInstance: MedicationKnowledge = new MedicationKnowledge()
  ): MedicationKnowledge {
    const newInstance: MedicationKnowledge = DomainResource.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.status !== undefined) {
      newInstance.status = MedicationKnowledgeStatus.parsePrimitive(json.status, json._status);
    }
    if (json.manufacturer !== undefined) {
      newInstance.manufacturer = Reference.parse(json.manufacturer);
    }
    if (json.doseForm !== undefined) {
      newInstance.doseForm = CodeableConcept.parse(json.doseForm);
    }
    if (json.amount !== undefined) {
      newInstance.amount = SimpleQuantity.parse(json.amount);
    }
    if (json.synonym !== undefined) {
      newInstance.synonym = json.synonym.map((x, i) => PrimitiveString.parsePrimitive(x, json._synonym?.[i]));
    }
    if (json.relatedMedicationKnowledge !== undefined) {
      newInstance.relatedMedicationKnowledge = json.relatedMedicationKnowledge.map((x) => MedicationKnowledgeRelatedMedicationKnowledge.parse(x));
    }
    if (json.associatedMedication !== undefined) {
      newInstance.associatedMedication = json.associatedMedication.map((x) => Reference.parse(x));
    }
    if (json.productType !== undefined) {
      newInstance.productType = json.productType.map((x) => CodeableConcept.parse(x));
    }
    if (json.monograph !== undefined) {
      newInstance.monograph = json.monograph.map((x) => MedicationKnowledgeMonograph.parse(x));
    }
    if (json.ingredient !== undefined) {
      newInstance.ingredient = json.ingredient.map((x) => MedicationKnowledgeIngredient.parse(x));
    }
    if (json.preparationInstruction !== undefined) {
      newInstance.preparationInstruction = PrimitiveMarkdown.parsePrimitive(json.preparationInstruction, json._preparationInstruction);
    }
    if (json.intendedRoute !== undefined) {
      newInstance.intendedRoute = json.intendedRoute.map((x) => CodeableConcept.parse(x));
    }
    if (json.cost !== undefined) {
      newInstance.cost = json.cost.map((x) => MedicationKnowledgeCost.parse(x));
    }
    if (json.monitoringProgram !== undefined) {
      newInstance.monitoringProgram = json.monitoringProgram.map((x) => MedicationKnowledgeMonitoringProgram.parse(x));
    }
    if (json.administrationGuidelines !== undefined) {
      newInstance.administrationGuidelines = json.administrationGuidelines.map((x) => MedicationKnowledgeAdministrationGuidelines.parse(x));
    }
    if (json.medicineClassification !== undefined) {
      newInstance.medicineClassification = json.medicineClassification.map((x) => MedicationKnowledgeMedicineClassification.parse(x));
    }
    if (json.packaging !== undefined) {
      newInstance.packaging = MedicationKnowledgePackaging.parse(json.packaging);
    }
    if (json.drugCharacteristic !== undefined) {
      newInstance.drugCharacteristic = json.drugCharacteristic.map((x) => MedicationKnowledgeDrugCharacteristic.parse(x));
    }
    if (json.contraindication !== undefined) {
      newInstance.contraindication = json.contraindication.map((x) => Reference.parse(x));
    }
    if (json.regulatory !== undefined) {
      newInstance.regulatory = json.regulatory.map((x) => MedicationKnowledgeRegulatory.parse(x));
    }
    if (json.kinetics !== undefined) {
      newInstance.kinetics = json.kinetics.map((x) => MedicationKnowledgeKinetics.parse(x));
    }
    return newInstance;
  }

  public static isMedicationKnowledge(input?: unknown): input is MedicationKnowledge {
    const castInput = input as MedicationKnowledge;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationKnowledge";
  }

  public toJSON(): IMedicationKnowledge {
    const result: IMedicationKnowledge = super.toJSON();

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.manufacturer) {
      result.manufacturer = this.manufacturer.toJSON();
    }

    if (this.doseForm) {
      result.doseForm = this.doseForm.toJSON();
    }

    if (this.amount) {
      result.amount = this.amount.toJSON();
    }

    if (this.synonym) {
      result.synonym = this.synonym.filter(x => !!x).map(x => x.value) as typeof result.synonym;
      result._synonym = Extension.serializePrimitiveExtensionArray(this.synonym);
    }

    if (this.relatedMedicationKnowledge) {
      result.relatedMedicationKnowledge = this.relatedMedicationKnowledge.map((x) => x.toJSON());
    }

    if (this.associatedMedication) {
      result.associatedMedication = this.associatedMedication.map((x) => x.toJSON());
    }

    if (this.productType) {
      result.productType = this.productType.map((x) => x.toJSON());
    }

    if (this.monograph) {
      result.monograph = this.monograph.map((x) => x.toJSON());
    }

    if (this.ingredient) {
      result.ingredient = this.ingredient.map((x) => x.toJSON());
    }

    if (this.preparationInstruction) {
      result.preparationInstruction = this.preparationInstruction.value;
      result._preparationInstruction = Extension.serializePrimitiveExtension(this.preparationInstruction);
    }

    if (this.intendedRoute) {
      result.intendedRoute = this.intendedRoute.map((x) => x.toJSON());
    }

    if (this.cost) {
      result.cost = this.cost.map((x) => x.toJSON());
    }

    if (this.monitoringProgram) {
      result.monitoringProgram = this.monitoringProgram.map((x) => x.toJSON());
    }

    if (this.administrationGuidelines) {
      result.administrationGuidelines = this.administrationGuidelines.map((x) => x.toJSON());
    }

    if (this.medicineClassification) {
      result.medicineClassification = this.medicineClassification.map((x) => x.toJSON());
    }

    if (this.packaging) {
      result.packaging = this.packaging.toJSON();
    }

    if (this.drugCharacteristic) {
      result.drugCharacteristic = this.drugCharacteristic.map((x) => x.toJSON());
    }

    if (this.contraindication) {
      result.contraindication = this.contraindication.map((x) => x.toJSON());
    }

    if (this.regulatory) {
      result.regulatory = this.regulatory.map((x) => x.toJSON());
    }

    if (this.kinetics) {
      result.kinetics = this.kinetics.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): MedicationKnowledge {
    return MedicationKnowledge.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicationKnowledge";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
