function ReviewCard({review}) {
    
    const { name, vote, text} = review;
    
    return (
        <div>
            <p>{text}</p>
            <div>
                <strong>{vote}</strong>
            </div>
            <div>
                By  {name}
            </div>
        </div>
    )
}

export default ReviewCard