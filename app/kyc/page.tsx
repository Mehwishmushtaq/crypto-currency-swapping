"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { HorizontalStepper } from "@/components/horizontal-stepper"

const steps = ["Personal Info", "Identity", "Address"]

export default function KYCPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    idType: "",
    idNumber: "",
    idExpiryDate: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      console.log("KYC data submitted:", formData)
      window.location.href = "/payment-method"
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
          </>
        )
      case 1:
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="idType">ID Type</Label>
              <Select value={formData.idType} onValueChange={(value) => handleSelectChange("idType", value)}>
                <SelectTrigger id="idType">
                  <SelectValue placeholder="Select ID type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="passport">Passport</SelectItem>
                  <SelectItem value="drivingLicense">Driving License</SelectItem>
                  <SelectItem value="nationalId">National ID</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="idNumber">ID Number</Label>
              <Input id="idNumber" name="idNumber" value={formData.idNumber} onChange={handleInputChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="idExpiryDate">ID Expiry Date</Label>
              <Input
                id="idExpiryDate"
                name="idExpiryDate"
                type="date"
                value={formData.idExpiryDate}
                onChange={handleInputChange}
                required
              />
            </div>
          </>
        )
      case 2:
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="addressLine1">Address Line 1</Label>
              <Input
                id="addressLine1"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="addressLine2">Address Line 2</Label>
              <Input id="addressLine2" name="addressLine2" value={formData.addressLine2} onChange={handleInputChange} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" name="city" value={formData.city} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State/Province</Label>
                <Input id="state" name="state" value={formData.state} onChange={handleInputChange} required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="postalCode">Postal Code</Label>
                <Input
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Select value={formData.country} onValueChange={(value) => handleSelectChange("country", value)}>
                  <SelectTrigger id="country">
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    {/* Add more countries as needed */}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        )
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">KYC Verification</CardTitle>
        </CardHeader>
        <CardContent>
          <HorizontalStepper steps={steps} currentStep={currentStep} />
          <form onSubmit={handleSubmit} className="space-y-4">
            {renderStep()}
            <div className="flex justify-between">
              {currentStep > 0 && (
                <Button type="button" variant="outline" onClick={() => setCurrentStep((prev) => prev - 1)}>
                  Previous
                </Button>
              )}
              <Button
                type="submit"
                className={`ml-auto ${currentStep === steps.length - 1 ? "bg-primary hover:bg-primary/90 text-primary-foreground" : ""}`}
              >
                {currentStep === steps.length - 1 ? "Complete KYC" : "Next"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

